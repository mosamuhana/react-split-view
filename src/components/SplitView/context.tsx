import { ReactNode, createContext, useContext } from 'react';

import { Layout, SplitViewPaneInfo } from './types';
import { DEFAULT_LAYOUT } from './constants';

export type PaneData = SplitViewPaneInfo & { position: number };

type ContextType = {
  layout: Layout;
  paneMap: Map<string, PaneData>;
  testId?: string;
};

const SplitViewContext = createContext<ContextType>({
  layout: DEFAULT_LAYOUT,
  paneMap: new Map<string, PaneData>(),
});

export const useSplitView = () => useContext(SplitViewContext);

type Props = {
  children: ReactNode;
  value: ContextType;
};

export const SplitViewProvider = ({ children, value }: Props) => {
  return <SplitViewContext.Provider value={value}>{children}</SplitViewContext.Provider>;
};
