import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode, MutableRefObject } from 'react';
import ResizeObserver from 'rc-resize-observer';

import { SplitViewPaneInfo, Layout } from './types';
import { DEFAULT_SASH_SIZE, DEFAULT_SNAP_THRESHOLD_SIZE, DEFAULT_HOVER_DELAY, DEFAULT_LAYOUT } from './constants';
import { SplitViewProvider, PaneData } from './context';
import { SplitViewSash } from './SplitViewSash';
import { isPaneEquals, relayout, resize, getSashState, getChildrenMap, getFixedPaneCount } from './utils';
import { styles } from './styles';

type Props = {
  paneData: SplitViewPaneInfo[];
  layout?: Layout;
  onChange?: (paneInfo: SplitViewPaneInfo[]) => void;
  hoverDelay?: number;
  sashSize?: number;
  actionRef?: MutableRefObject<{ updatePaneData?: () => void }>;
  children?: ReactNode;
};

export function SplitView({
  paneData,
  layout = DEFAULT_LAYOUT,
  onChange,
  hoverDelay = DEFAULT_HOVER_DELAY,
  sashSize = DEFAULT_SASH_SIZE,
  actionRef,
  children,
}: Props) {
  const [paneDataState, setPaneDataState] = useState<SplitViewPaneInfo[]>(
    paneData.map((paneInfo) => ({ ...paneInfo })),
  );

  const [containerSize, setContainerSize] = useState(0);
  const containerSizeRef = useRef(0);
  const initRef = useRef(false);
  const updatedRef = useRef(false);
  const onChangeRef = useRef(onChange);

  onChangeRef.current = onChange;
  containerSizeRef.current = containerSize;

  useEffect(() => {
    if (containerSize > 0) {
      initRef.current = true;
      setPaneDataState((prevPaneData) => {
        const clone = prevPaneData.map(x => ({ ...x }));
        relayout(containerSize, clone);
        return clone;
      });
    }
  }, [containerSize]);

  const updatePaneData = useCallback(() => {
    setPaneDataState((prevPaneData) => {
      if (containerSizeRef.current > 0) {
        const clone = paneData.map(x => ({ ...x }));
        relayout(containerSizeRef.current, clone);
        return [...clone];
      }
      return prevPaneData;
    });
  }, [paneData]);

  useEffect(() => {
    if (!updatedRef.current && containerSize > 0) {
      updatedRef.current = true;
      updatePaneData();
    }
  }, [updatePaneData, containerSize]);

  useEffect(() => {
    if (actionRef) {
      actionRef.current = { updatePaneData };
    }
  }, [actionRef, updatePaneData]);

  const sumRef = useRef(0);

  const onSashDragStopedCallback = useCallback(() => {
    sumRef.current = 0;
  }, []);

  const onSashDragingCallback = useCallback(
    (delta: number, index: number) => {
      if (delta !== 0) {
        const adjustSize = Math.abs(delta);
        const frontPanes = paneDataState.slice(0, index).reverse();
        const behandPanes = paneDataState.slice(index, paneDataState.length);

        const increasingPanes = delta > 0 ? frontPanes : behandPanes;
        const decreasingPanes = delta < 0 ? frontPanes : behandPanes;

        let increasableSize = resize(increasingPanes, adjustSize, 1, false);
        let decreasableSize = resize(decreasingPanes, adjustSize, -1, false);

        if (
          increasableSize == 0 &&
          increasingPanes[0].snapable &&
          increasingPanes[0].snapped &&
          increasingPanes[0].minSize != increasingPanes[0].maxSize
        ) {
          const fixedPaneCount = getFixedPaneCount(increasingPanes);
          if (fixedPaneCount === increasingPanes.length - 1) {
            const a = increasingPanes[0].minSize - increasingPanes[0].snappedSize!;
            const decreasableSize1 = resize(decreasingPanes, a, -1, false);

            if (decreasableSize1 >= a) {
              sumRef.current += Math.abs(delta);
            }
            if (sumRef.current > DEFAULT_SNAP_THRESHOLD_SIZE) {
              sumRef.current = 0;
              increasableSize = decreasableSize = a;
              increasingPanes[0].snapped = false;
            }
          }
        }

        if (
          decreasableSize == 0 &&
          decreasingPanes.length > 0 &&
          decreasingPanes[0].snapable &&
          !decreasingPanes[0].snapped &&
          decreasingPanes[0].minSize != decreasingPanes[0].maxSize //非固定固定
        ) {
          const fixedPaneCount = getFixedPaneCount(decreasingPanes);
          if (fixedPaneCount === decreasingPanes.length - 1) {
            const collapsingPane = decreasingPanes[0];
            if (collapsingPane.snapable) {
              const as = collapsingPane.minSize - collapsingPane.snappedSize!;
              const increasableSize1 = resize(
                increasingPanes,
                collapsingPane.minSize - collapsingPane.snappedSize!,
                1,
                false,
              );

              if (increasableSize1 >= as) {
                sumRef.current += Math.abs(delta);
                if (sumRef.current > DEFAULT_SNAP_THRESHOLD_SIZE) {
                  sumRef.current = 0;
                  increasableSize = decreasableSize = collapsingPane.minSize - collapsingPane.snappedSize!;
                  collapsingPane.snapped = true;
                }
              }
            }
          }
        }

        const commitAdjustSize = Math.min(increasableSize, decreasableSize);

        resize(increasingPanes, commitAdjustSize, 1, true);
        resize(decreasingPanes, commitAdjustSize, -1, true);

        setPaneDataState([...paneDataState]);
      }
    },
    [paneDataState],
  );

  const paneAndSash = useMemo(() => {
    let currentPosition = 0;
    const paneKeys: string[] = [];
    const sashes: ReactNode[] = [];
    const paneMap = new Map<string, PaneData>();

    paneDataState.forEach((paneInfo, i) => {
      const position = currentPosition;
      currentPosition += paneInfo.size!;
      const paneDataWithPosition: PaneData = { ...paneInfo, position };
      paneKeys.push(paneInfo.paneKey);
      paneMap.set(paneInfo.paneKey, paneDataWithPosition);
      if (i > 0) {
        const state = getSashState(paneDataState[i - 1], paneDataState[i]);

        sashes.push(
          <SplitViewSash
            index={i}
            key={`__svs_${paneInfo.paneKey}`}
            onSashDraging={onSashDragingCallback}
            onSashDragStoped={onSashDragStopedCallback}
            position={position}
            delay={hoverDelay}
            sashState={state}
            size={sashSize}
          />,
        );
      }
    });

    return { paneKeys, sashes, paneMap };
  }, [hoverDelay, layout, onSashDragingCallback, onSashDragStopedCallback, paneDataState, sashSize]);

  const childMap = useMemo(() => getChildrenMap(children), [children]);

  useEffect(() => {
    if (
      paneDataState.length != paneData.length ||
      paneData.some((pane1, index) => {
        const pane2 = paneDataState[index];
        return pane2 && pane1 && !isPaneEquals(pane1, pane2);
      })
    ) {
      onChangeRef.current?.(paneDataState);
    }
  }, [paneDataState, paneData]);

  //console.log("render", paneAndSash);
  return (
    <SplitViewProvider value={{ layout, paneMap: paneAndSash.paneMap }}>
      <ResizeObserver
        onResize={({ width, height }) => {
          setContainerSize(layout === 'horizontal' ? width : height);
        }}
      >
        <div style={styles.splitView}>
          {initRef.current && (
            <>
              <div style={styles.sashContaienr}>{paneAndSash.sashes}</div>
              <div style={styles.paneContaienr}>{paneAndSash.paneKeys.map(key => childMap.get(key))}</div>
            </>
          )}
        </div>
      </ResizeObserver>
    </SplitViewProvider>
  );
}
