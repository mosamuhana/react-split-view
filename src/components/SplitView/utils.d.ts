import type { ReactNode, ReactElement } from 'react';
import type { SplitViewPaneInfo, SashState } from './types';
export declare function isPaneEquals(pane1: SplitViewPaneInfo, pane2: SplitViewPaneInfo): boolean;
export declare function relayout(containerSize: number, paneData: SplitViewPaneInfo[]): void;
export declare function resize(panes: SplitViewPaneInfo[], adjustSize: number, direction: number, commiting: boolean): number;
export declare function getSashState(frontPaneData: SplitViewPaneInfo, behandPaneData: SplitViewPaneInfo): SashState;
export declare function getChildrenMap(children: ReactNode): Map<string, ReactElement<any>>;
export declare function getFixedPaneCount(a: SplitViewPaneInfo[]): number;
