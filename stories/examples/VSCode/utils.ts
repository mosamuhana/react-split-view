import { SplitViewPaneInfo } from '../../../src/';

export const saveLayout = (layoutName: string, paneData: SplitViewPaneInfo[]) => {
  localStorage.setItem(layoutName, JSON.stringify(paneData));
};

export const loadLayout = (layoutName: string): SplitViewPaneInfo[] | undefined => {
  const json = localStorage.getItem(layoutName);
  if (json) {
    return JSON.parse(json);
  }
  return undefined;
};
