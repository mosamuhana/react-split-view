import type { CSSProperties } from 'react';
import type { Layout, SashState } from './types';
type CursorProperty = CSSProperties['cursor'];
export declare const styles: {
    readonly splitView: CSSProperties;
    readonly paneContaienr: CSSProperties;
    readonly sashContaienr: CSSProperties;
    readonly pane: CSSProperties;
    readonly sash: CSSProperties;
};
export declare const layouts: Layout[];
export declare const sashStates: SashState[];
export declare const stateToCursorMap: Record<Layout, Record<SashState, CursorProperty>>;
export {};
