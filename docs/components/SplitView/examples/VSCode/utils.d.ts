import { SplitViewPaneInfo } from '../../';
export declare const saveLayout: (layoutName: string, paneData: SplitViewPaneInfo[]) => void;
export declare const loadLayout: (layoutName: string) => SplitViewPaneInfo[] | undefined;
