import type { ReactNode, MutableRefObject } from 'react';
import { SplitViewPaneInfo, Layout } from './types';
type Props = {
    paneData: SplitViewPaneInfo[];
    layout?: Layout;
    onChange?: (paneInfo: SplitViewPaneInfo[]) => void;
    hoverDelay?: number;
    sashSize?: number;
    actionRef?: MutableRefObject<{
        updatePaneData?: () => void;
    }>;
    children?: ReactNode;
};
export declare function SplitView({ paneData, layout, onChange, hoverDelay, sashSize, actionRef, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
