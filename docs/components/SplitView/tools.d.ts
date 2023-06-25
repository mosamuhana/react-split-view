import { SplitViewPaneInfo } from './types';
/**
 * Move the pane to an absolute position
 * @param paneData the SplitView PaneData
 * @param sourcePaneKey paneKey
 * @param destinationPaneKey
 * @param behand
 */
export declare const paneMoveTo: (paneData: SplitViewPaneInfo[], sourcePaneKey: string, destinationPaneKey: string, behand?: boolean) => void;
export declare const paneMoveToLast: (paneData: SplitViewPaneInfo[], sourcePaneKey: string) => void;
export declare const paneMoveToFirst: (paneData: SplitViewPaneInfo[], sourcePaneKey: string) => void;
export declare const paneCut: (paneData: SplitViewPaneInfo[], paneKey: string) => SplitViewPaneInfo | undefined;
export declare const panePaste: (srcPane: SplitViewPaneInfo, destPaneData: SplitViewPaneInfo[], paneKey: string, behand?: boolean) => void;
