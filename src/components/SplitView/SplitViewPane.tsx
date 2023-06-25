import type { CSSProperties, ReactNode, HTMLAttributes } from 'react';

import { useSplitView } from './context';
import { styles } from './styles';
import type { HTMLDivAttributes } from './types';

export type Props = {
  paneKey: string;
  children?: ReactNode;
} & HTMLDivAttributes;

export function SplitViewPane({ paneKey, children, ...props }: Props) {
  const { layout, paneMap } = useSplitView();
  const paneData = paneMap.get(paneKey);

  if (!paneData) return null;

  const { size, position } = paneData;
  const style: CSSProperties = { ...styles.pane };

  if (layout === 'horizontal') {
    style.width = size ?? undefined;
    style.left = position;
  } else {
    style.height = size ?? undefined;
    style.top = position;
  }

  return (
    <div {...props} style={style}>
      {children}
    </div>
  );
}
