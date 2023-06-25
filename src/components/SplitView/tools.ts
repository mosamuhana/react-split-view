import { SplitViewPaneInfo } from './types';

/**
 * Move the pane to an absolute position
 * @param paneData the SplitView PaneData
 * @param sourcePaneKey paneKey
 * @param destinationPaneKey
 * @param behand
 */
export const paneMoveTo = (
  paneData: SplitViewPaneInfo[],
  sourcePaneKey: string,
  destinationPaneKey: string,
  behand: boolean = false,
) => {
  const sourceIndex = paneData.findIndex(x => x.paneKey === sourcePaneKey);
  if (sourceIndex !== -1) {
    const from = paneData.splice(sourceIndex, 1);
    const destinationIndex = paneData.findIndex(x => x.paneKey === destinationPaneKey);

    paneData.splice(destinationIndex + (behand ? 1 : 0), 0, ...from);
  }
};

export const paneMoveToLast = (paneData: SplitViewPaneInfo[], sourcePaneKey: string) => {
  if (paneData.length) {
    const last = paneData[paneData.length - 1];
    paneMoveTo(paneData, sourcePaneKey, last.paneKey, true);
  }
};

export const paneMoveToFirst = (paneData: SplitViewPaneInfo[], sourcePaneKey: string) => {
  if (paneData.length) {
    const first = paneData[0];
    paneMoveTo(paneData, sourcePaneKey, first.paneKey, false);
  }
};

export const paneCut = (paneData: SplitViewPaneInfo[], paneKey: string): SplitViewPaneInfo | undefined => {
  const index = paneData.findIndex(x => x.paneKey === paneKey);
  if (index !== -1) {
    return paneData.splice(index, 1)[0];
  }
  return undefined;
};

export const panePaste = (
  srcPane: SplitViewPaneInfo,
  destPaneData: SplitViewPaneInfo[],
  paneKey: string,
  behand: boolean = false,
) => {
  const index = destPaneData.findIndex(x => x.paneKey === paneKey);
  if (index !== -1) {
    destPaneData.splice(index + (behand ? 1 : 0), 0, srcPane);
  }
};
