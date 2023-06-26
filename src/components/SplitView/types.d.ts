import type { HTMLAttributes } from 'react';
export type HTMLDivAttributes = HTMLAttributes<HTMLDivElement>;
export type Layout = 'horizontal' | 'vertical';
export type SashState = 'disabled' | 'enabled' | 'minimum' | 'maximum';
export type SplitViewPaneInfo = {
    paneKey: string;
    size?: number;
    minSize: number;
    maxSize?: number;
    snapable?: boolean;
    snapped?: boolean;
    snappedSize?: number;
    priority?: number;
};
