import { type CSSProperties } from 'react';

const style: CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(30, 30, 30)',
  borderLeftColor: 'rgba(128, 128, 128, 0.35)',
  borderRightColor: 'rgba(128, 128, 128, 0.35)',
};

export function ConsoleView() {
  return (
    <div style={style}>
      <div style={{ width: '100%', borderTop: '1px solid rgba(128, 128, 128, 0.35)' }}></div>
    </div>
  );
}
