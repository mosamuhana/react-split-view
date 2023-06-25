import { ReactNode } from 'react';
import { Layout, SplitViewPaneInfo } from './types';
export type PaneData = SplitViewPaneInfo & {
    position: number;
};
type ContextType = {
    layout: Layout;
    paneMap: Map<string, PaneData>;
    testId?: string;
};
export declare const useSplitView: () => ContextType;
type Props = {
    children: ReactNode;
    value: ContextType;
};
export declare const SplitViewProvider: ({ children, value }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
