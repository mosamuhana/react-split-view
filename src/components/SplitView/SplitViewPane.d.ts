import type { ReactNode } from 'react';
import type { HTMLDivAttributes } from './types';
export type Props = {
    paneKey: string;
    children?: ReactNode;
} & HTMLDivAttributes;
export declare function SplitViewPane({ paneKey, children, ...props }: Props): import("react/jsx-runtime").JSX.Element | null;
