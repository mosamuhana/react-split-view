import { useState, useEffect } from 'react';
import { SplitView, SplitViewPane, SplitViewPaneInfo } from '../../src/';

const STORE_KEY = 'LAYOUT';

const save = (data: SplitViewPaneInfo[]) => localStorage.setItem(STORE_KEY, JSON.stringify(data));

const load = (): SplitViewPaneInfo[] | undefined => {
  const text = localStorage.getItem(STORE_KEY);
  return !text ? undefined : JSON.parse(text);
};

const initialData: SplitViewPaneInfo[] = [
  {
    paneKey: 'Pane1',
    minSize: 44,
    maxSize: 44,
  },
  {
    paneKey: 'Pane2',
    minSize: 120,
    maxSize: 240,
    size: 180,
    snapable: true,
  },
  {
    paneKey: 'Pane3',
    minSize: 160,
  },
  {
    paneKey: 'Pane4',
    minSize: 120,
    maxSize: 240,
  },
];

export const Example = () => {
  const [paneData, setPaneData] = useState<SplitViewPaneInfo[]>(() => load() ?? initialData);

  useEffect(() => {
    save(paneData);
  }, [paneData]);

  return (
    <div style={{ height: 800, width: '100%' }}>
      <SplitView paneData={paneData} onChange={(changes) => setPaneData([...changes])}>
        <SplitViewPane paneKey="Pane1">fixed</SplitViewPane>
        <SplitViewPane paneKey="Pane2">Snapable</SplitViewPane>
        <SplitViewPane paneKey="Pane3">Content</SplitViewPane>
        <SplitViewPane paneKey="Pane4">Property</SplitViewPane>
      </SplitView>
    </div>
  );
};
