import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent as RMouseEvent } from 'react';

import type { Layout, HTMLDivAttributes, SashState } from './types';
import { DEFAULT_SASH_SIZE, DEFAULT_SNAP_THRESHOLD_SIZE, DEFAULT_SASH_HOVER_COLOR } from './constants';
import { useSplitView } from './context';
import { stateToCursorMap, styles } from './styles';

export type Props = {
  index: number;
  position: number;
  onSashDraging?: (delta: number, index: number) => void;
  onSashDragStoped?: () => void;
  sashState?: SashState;
  size?: number;
  delay?: number;
} & HTMLDivAttributes;

export function SplitViewSash({
  index,
  position = 0,
  onSashDraging,
  onSashDragStoped,
  sashState = 'maximum',
  size = DEFAULT_SASH_SIZE,
  delay = DEFAULT_SNAP_THRESHOLD_SIZE,
  ...props
}: Props) {
  const onSashDragingRef = useRef(onSashDraging);
  const onSashDragStopedRef = useRef(onSashDragStoped);
  const mousePositionRef = useRef<number>(0);
  const mouseDownRef = useRef<boolean>(false);
  const [state, setState] = useState({ mouseEnter: false, hover: false });
  const { layout } = useSplitView();

  onSashDragingRef.current = onSashDraging;
  onSashDragStopedRef.current = onSashDragStoped;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (mouseDownRef.current) {
        e.preventDefault();
        const mousePosition = layout === 'horizontal' ? e.screenX : e.screenY;
        const delta = mousePosition - mousePositionRef.current;
        mousePositionRef.current = mousePosition;
        onSashDragingRef.current?.(delta, index);
      }
    };
    const onMouseUp = (e: MouseEvent) => {
      if (mouseDownRef.current) {
        e.preventDefault();
        mouseDownRef.current = false;
        setState((prev) => ({ ...prev, hover: false, mouseEnter: false }));
        onSashDragStopedRef.current?.();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [index, layout]);

  const style: CSSProperties = {
    ...styles.sash,
    width: '100%',
    height: '100%',
  };

  const center = position - size / 2;

  style.cursor = stateToCursorMap[layout][sashState];

  if (layout == 'horizontal') {
    style.width = size;
    style.left = `${center}px`;
  } else {
    style.height = size;
    style.top = `${center}px`;
  }

  if (state.hover || mouseDownRef.current) {
    style.backgroundColor = DEFAULT_SASH_HOVER_COLOR;
  }

  // Delay hover
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | undefined = undefined;
    if (state.mouseEnter) {
      timerId = setTimeout(() => {
        setState((prevState) => ({ ...prevState, hover: true }));
      }, delay);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [state.mouseEnter, delay]);

  const onMouseDown = useCallback(
    (e: RMouseEvent) => {
      if (sashState != 'disabled') {
        mousePositionRef.current = layout === 'horizontal' ? e.screenX : e.screenY;
        mouseDownRef.current = true;
        setState((prevState) => ({ ...prevState, mouseEnter: true, hover: true }));
      }
    },
    [layout, sashState],
  );

  const onMouseEnter = useCallback(() => {
    if (!mouseDownRef.current && sashState != 'disabled') {
      setState((prevState) => ({ ...prevState, mouseEnter: true }));
    }
  }, [sashState]);

  const onMouseLeave = useCallback(() => {
    if (!mouseDownRef.current) {
      setState((prevState) => ({ ...prevState, mouseEnter: false, hover: false }));
    }
  }, []);

  return (
    <div
      {...props}
      style={style}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  );
}
