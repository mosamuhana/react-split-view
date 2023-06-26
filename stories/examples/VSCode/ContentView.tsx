import { useState, useEffect, type CSSProperties } from 'react';

import { SplitView, SplitViewPane, SplitViewPaneInfo } from '../../../src/';
import { MainView } from './MainView';
import { saveLayout, loadLayout } from './utils';

const KEY = 'CONTENT_LAYOUT';

const initialState: SplitViewPaneInfo[] = [
  {
    paneKey: 'controlBar',
    minSize: 48,
    maxSize: 48,
  },
  {
    paneKey: 'explorer',
    minSize: 120,
    size: 180,
    snapable: true,
  },
  {
    paneKey: 'main',
    minSize: 160,
    priority: 1,
  },
];

const controlBarStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#333333',
};

const explorerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#252526',
  outlineColor: 'rgba(83, 89, 93, 0.5)'
};

export function ContentView() {
  const [state, setState] = useState<SplitViewPaneInfo[]>(() => loadLayout(KEY) ?? initialState);

  useEffect(() => {
    saveLayout(KEY, state);
  }, [state]);

  return (
    <SplitView
      paneData={state}
      onChange={changes => setState([...changes])}
    >
      <SplitViewPane paneKey="controlBar">
        <div style={controlBarStyle}></div>
      </SplitViewPane>
      <SplitViewPane paneKey="explorer">
        <div style={explorerStyle}></div>
      </SplitViewPane>
      <SplitViewPane paneKey="main">
        <MainView />
      </SplitViewPane>
    </SplitView>
  );
}
