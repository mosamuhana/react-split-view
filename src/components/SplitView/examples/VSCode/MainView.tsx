import { useState, useEffect } from 'react';

import { SplitView, SplitViewPane, SplitViewPaneInfo } from '../../';
import { ConsoleView } from './ConsoleView';
import { EditorView } from './EditorView';
import { saveLayout, loadLayout } from './utils';

const KEY = 'MAIN_LAYOUT';

const initialState: SplitViewPaneInfo[] = [
  {
    paneKey: 'editor',
    minSize: 80,
    priority: 1,
  },
  {
    paneKey: 'console',
    minSize: 80,
    snapable: true,
  },
];

export function MainView() {
  const [state, setState] = useState<SplitViewPaneInfo[]>(() => loadLayout(KEY) ?? initialState);

  useEffect(() => {
    saveLayout(KEY, state);
  }, [state]);

  return (
    <SplitView
      layout="vertical"
      paneData={state}
      onChange={changes => setState([...changes])}
    >
      <SplitViewPane paneKey="editor">
        <EditorView />
      </SplitViewPane>
      <SplitViewPane paneKey="console">
        <ConsoleView />
      </SplitViewPane>
    </SplitView>
  );
}
