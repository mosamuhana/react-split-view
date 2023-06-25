import type { HTMLDivAttributes, SashState } from './types';
export type Props = {
    index: number;
    position: number;
    onSashDraging?: (delta: number, index: number) => void;
    onSashDragStoped?: () => void;
    sashState?: SashState;
    size?: number;
    delay?: number;
} & HTMLDivAttributes;
export declare function SplitViewSash({ index, position, onSashDraging, onSashDragStoped, sashState, size, delay, ...props }: Props): import("react/jsx-runtime").JSX.Element;
