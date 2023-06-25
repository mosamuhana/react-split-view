import type { CSSProperties } from 'react';
import type { Layout, SashState } from './types';

type CursorProperty = CSSProperties['cursor'];

const contaienr: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

const splitView: CSSProperties = {
  display: 'block',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const paneContaienr: CSSProperties = {
  ...contaienr,
};

const sashContaienr: CSSProperties = {
  ...contaienr,
  overflow: 'hidden',
};

const pane: CSSProperties = {
  position: 'absolute',
  display: 'block',
  // border: '1px solid red',
  boxSizing: 'border-box',
  overflow: 'auto',
  height: '100%',
  width: '100%',
  left: 0,
  top: 0,
};

const sash: CSSProperties = {
  position: 'absolute',
  backgroundColor: 'transparent',
  zIndex: 35,
};

export const styles = {
  splitView,
  paneContaienr,
  sashContaienr,
  pane,
  sash,
} as const;

export const layouts: Layout[] = ['horizontal', 'vertical'];
export const sashStates: SashState[] = ['disabled', 'enabled', 'minimum', 'maximum'];

export const stateToCursorMap: Record<Layout, Record<SashState, CursorProperty>> = {
  horizontal: {
    minimum: 'e-resize',
    maximum: 'w-resize',
    enabled: 'ew-resize',
    disabled: 'inherit',
  },
  vertical: {
    minimum: 's-resize',
    maximum: 'n-resize',
    enabled: 'ns-resize',
    disabled: 'inherit',
  },
};
