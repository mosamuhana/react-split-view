import { useState, useEffect } from 'react';

import { SplitView, SplitViewPane, SplitViewPaneInfo } from '../../';
import { ContentView } from './ContentView';
import { MenuView } from './MenuView';
import { StatusBarView } from './StatusBarView';
import { saveLayout, loadLayout } from './utils';

const KEY = 'APP_LAYOUT';

const initialState: SplitViewPaneInfo[] = [
  {
    paneKey: 'menu',
    minSize: 30,
    maxSize: 30,
  },
  {
    paneKey: 'content',
    minSize: 120,
  },
  {
    paneKey: 'statusBar',
    minSize: 22,
    maxSize: 22,
  },
];

export const VSCode = () => {
  const [state, setState] = useState<SplitViewPaneInfo[]>(() => loadLayout(KEY) ?? initialState);

  useEffect(() => {
    saveLayout(KEY, state);
  }, [state]);

  return (
    <div style={{ height: 500 }}>
      <SplitView
        paneData={state}
        onChange={changes => setState([ ...changes ])}
        layout="vertical"
      >
        <SplitViewPane paneKey="menu">
          <MenuView />
        </SplitViewPane>

        <SplitViewPane paneKey="content">
          <ContentView />
        </SplitViewPane>

        <SplitViewPane paneKey="statusBar">
          <StatusBarView />
        </SplitViewPane>
      </SplitView>
    </div>
  );
};
