import { Children, isValidElement } from 'react';
import type { ReactNode, ReactElement } from 'react';

import type { SplitViewPaneInfo, SashState } from './types';

export function isPaneEquals(pane1: SplitViewPaneInfo, pane2: SplitViewPaneInfo): boolean {
  return (
    pane1.maxSize === pane2.maxSize &&
    pane1.minSize === pane2.minSize &&
    pane1.paneKey === pane2.paneKey &&
    pane1.priority === pane2.priority &&
    // pane1.size === pane2.size &&
    pane1.snapable === pane2.snapable &&
    pane1.snapped === pane2.snapped &&
    pane1.snappedSize === pane2.snappedSize
  );
}

export function relayout(containerSize: number, paneData: SplitViewPaneInfo[]): void {
  const allHaveMaxSizePanes = paneData.filter(
    (x) => x.maxSize && x.maxSize > 0 && x.maxSize !== Number.POSITIVE_INFINITY,
  ).length;

  paneData.forEach((pane, index) => {
    const minSize = pane.minSize || 0;
    let maxSize: number = pane.maxSize || Number.POSITIVE_INFINITY;
    let size = pane.size;

    pane.snapable = pane.snapable || false;

    if (minSize === 0) {
      pane.snapable = false;
    }

    if (index === paneData.length - 1) {
      if (allHaveMaxSizePanes == paneData.length) {
        maxSize = Number.POSITIVE_INFINITY;
      }
    }

    if (pane.snapable) {
      pane.snappedSize = pane.snappedSize || 0;
    }

    if (pane.snapable && pane.snapped === true) {
      size = pane.snappedSize!;
    } else {
      size = pane.minSize;
    }

    pane.minSize = minSize;
    pane.maxSize = maxSize;
    pane.priority = pane.priority || 0;
    pane.size = size;
  });

  const splitViewSize = paneData.reduce((totalSize, pane) => totalSize + pane.size!, 0);

  let adjustableSizeTotal = containerSize - splitViewSize;

  if (adjustableSizeTotal === 0) return;

  const increaseOrDecrease = Math.abs(adjustableSizeTotal) / adjustableSizeTotal;
  const adjustablePanes = paneData.filter(
    (x) =>
      (increaseOrDecrease > 0 && x.size! < x.maxSize! && !x.snapped) ||
      (increaseOrDecrease < 0 && x.size! > x.minSize),
  );

  if (adjustablePanes.length === 0) return;

  // group by priority
  const groupByPriority = new Map<number, SplitViewPaneInfo[]>();
  adjustablePanes.sort((a, b) => b.priority! - a.priority!);
  adjustablePanes.forEach((x) => {
    const priority = x.priority!;
    if (!groupByPriority.has(priority)) {
      groupByPriority.set(priority, []);
    }
    groupByPriority.get(priority)!.push(x);
  });

  groupByPriority.forEach((panes) => {
    let groupAdjustableSize = panes.reduce((adjustableSize, pane) => {
      if (increaseOrDecrease > 0) {
        return adjustableSize + (pane.maxSize! - pane.size!);
      }
      return adjustableSize + (pane.size! - pane.minSize);
    }, 0);
    if (groupAdjustableSize === Number.POSITIVE_INFINITY) {
      groupAdjustableSize = adjustableSizeTotal;
    }

    if (Math.abs(adjustableSizeTotal) >= groupAdjustableSize) {
      adjustableSizeTotal -= groupAdjustableSize * increaseOrDecrease;
    } else {
      groupAdjustableSize = adjustableSizeTotal * increaseOrDecrease;
      adjustableSizeTotal = 0;
    }

    let count = panes.length;
    let averageSize = groupAdjustableSize / count;
    panes
      .sort((a, b) =>
        increaseOrDecrease > 0
          ? a.maxSize! - a.size! - (b.maxSize! - b.size!)
          : a.size! - a.minSize! - (b.size! - b.minSize!),
      )
      .forEach((pane) => {
        const thePaneAllowed = increaseOrDecrease > 0 ? pane.maxSize! - pane.size! : pane.size! - pane.minSize!;
        if (thePaneAllowed < averageSize) {
          pane.size! += thePaneAllowed * increaseOrDecrease;
          groupAdjustableSize -= thePaneAllowed;
        } else {
          pane.size! += averageSize * increaseOrDecrease;
          groupAdjustableSize -= averageSize;
        }
        count--;
        averageSize = groupAdjustableSize / count;
      });
  });
}

export function resize(panes: SplitViewPaneInfo[], adjustSize: number, direction: number, commiting: boolean): number {
  if (!panes.length || (panes[0].snapped && panes[0].size === panes[0].snappedSize)) {
    return 0;
  }

  let adjustableSize = 0;
  let adjustSizeTotal = adjustSize;

  for (let i = 0; i < panes.length && adjustSizeTotal > 0; i++) {
    const pane = panes[i];
    const paneAdjustableSize = direction > 0
      ? pane.maxSize! - pane.size!
      : (
        pane.snapable && pane.size == pane.minSize && commiting
          ? pane.minSize
          : pane.size! - pane.minSize
      );

    if (paneAdjustableSize >= adjustSizeTotal) {
      adjustableSize += adjustSizeTotal;
      if (commiting) {
        pane.size! += adjustSizeTotal * direction;
      }
      adjustSizeTotal = 0;
    } else {
      adjustSizeTotal -= paneAdjustableSize;
      if (commiting) {
        pane.size! += paneAdjustableSize * direction;
      }
      adjustableSize += paneAdjustableSize;
    }

    if (commiting && pane.snapped && pane.size! != pane.snappedSize) {
      pane.snapped = false;
    }
  }

  return adjustableSize;
}

export function getSashState(frontPaneData: SplitViewPaneInfo, behandPaneData: SplitViewPaneInfo): SashState {
  if (frontPaneData.minSize == frontPaneData.maxSize || behandPaneData.minSize == behandPaneData.maxSize) {
    return 'disabled';
  } else if (frontPaneData.minSize == frontPaneData.size) {
    return 'minimum';
  } else if (frontPaneData.maxSize == frontPaneData.size) {
    return 'maximum';
  }
  return 'enabled';
}

export function getChildrenMap(children: ReactNode): Map<string, ReactElement<any>> {
  const map = new Map<string, ReactElement<any>>();

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.props.paneKey) {
      map.set(child.props.paneKey, child);
    }
  });

  return map;
}

export function getFixedPaneCount(a: SplitViewPaneInfo[]) {
  return a.reduce((total, pane) => {
    if (pane.minSize === pane.maxSize) {
      return total + 1;
    }
    return total;
  }, 0);
}
