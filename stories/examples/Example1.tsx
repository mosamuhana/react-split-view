import { CSSProperties } from 'react';

import { SplitView, SplitViewPane, SplitViewPaneInfo } from '../../src/';

const initialPaneData: SplitViewPaneInfo[] = [
  { paneKey: 'pane1', minSize: 180 },
  { paneKey: 'pane2', minSize: 180 },
  { paneKey: 'pane3', minSize: 400 },
];

const containerStyle: CSSProperties = {
  height: 300,
  minWidth: 600,
  overflow: 'auto',
};

const paneStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
};

const pane1Style: CSSProperties = {
  ...paneStyle,
  border: '1px solid red',
  //backgroundColor: 'red',
};

const pane2Style: CSSProperties = {
  ...paneStyle,
  border: '1px solid blue',
  //backgroundColor: 'blue',
};

const pane3Style: CSSProperties = {
  ...paneStyle,
  border: '1px solid pink',
  //backgroundColor: 'pink',
};

export const Example1 = () => {
  return (
    <div style={containerStyle} className="demo-basic">
      <SplitView paneData={initialPaneData}>
        <SplitViewPane paneKey="pane1">
          <div style={pane1Style}>Pane 1</div>
        </SplitViewPane>
        <SplitViewPane paneKey="pane2">
          <div style={pane2Style}>Pane 2</div>
        </SplitViewPane>
        <SplitViewPane paneKey="pane3" className="content-pane">
          <div style={pane3Style}>Pane 3</div>
        </SplitViewPane>
      </SplitView>
    </div>
  );
};
