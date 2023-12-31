# React SplitView

A React component that imitates VS Code SplitView. As far as I know, the SplitView function is available, if not, please submit an Issue.


## <a href="https://mosamuhana.github.io/react-split-view" target="_blank">Github Pages Demo</a>
## <a href="https://64980f79fcb8055c316b7d4c-gtxnkcmlxf.chromatic.com" target="_blank">Chromatic Demo</a>

## ✨ Characteristic
- 🌈 VSCode similar SplitView function
- 📦 Support priority, when the parent container changes size or drags Sash, the one with higher priority will be resized first
- 🛡 Support minimum size and maximum size constraints
- ⚙️ Support docking
- 🌍 Support fixed Pane
- 🎨 Support for chain reactions
- ⛪ Support Hover Delay
- 🎷 Support for layout storage
- 📚 Nested layouts are supported

---

## 🖥 Environment

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

---

<table>
  <tbody>
    <tr>
      <td>
        <a href="http://godban.github.io/browsers-support-badges" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />
        </a>
      </td>
      <td>
        <a href="http://godban.github.io/browsers-support-badges" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />
        </a>
      </td>
      <td>
        <a href="http://godban.github.io/browsers-support-badges" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />
        </a>
      </td>
      <td>
        <a href="http://godban.github.io/browsers-support-badges" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />
        </a>
      </td>
      <td>
        <a href="http://godban.github.io/browsers-support-badges" target="_blank">
          <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />
        </a>
      </td>
    </tr>
    <tr>
      <td>IE, Edge</td>
      <td>Firefox</td>
      <td>Chrome</td>
      <td>Safari</td>
      <td>Electron</td>
    </tr>
    <tr>
      <td>IE11, Edge</td>
      <td>last 2 versions</td>
      <td>last 2 versions</td>
      <td>last 2 versions</td>
      <td>last 2 versions</td>
    </tr>
  </tbody>
</table>

---

## 📦 Install

```bash
npm install @devteks/react-split-view
```

```bash
yarn add @devteks/react-split-view
```

---

## 🔨 Use

```tsx

import { useState, useEffect } from 'react';
import {
  SplitView,
  SplitViewPane,
  SplitViewPaneInfo,
} from '@devteks/react-split-view';

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

const Example = () => {
  const [paneData, setPaneData] = useState<SplitViewPaneInfo[]>(() => load() ?? initialData);

  useEffect(() => {
    save(paneData);
  }, [paneData]);

  return (
    <div style={{ height: 800, width: '100%' }}>
      <SplitView
        paneData={paneData}
        onChange={changes => setPaneData([ ...changes ])}
      >
        <SplitViewPane paneKey="Pane1">fixed</SplitViewPane>
        <SplitViewPane paneKey="Pane2">Snapable</SplitViewPane>
        <SplitViewPane paneKey="Pane3">Content</SplitViewPane>
        <SplitViewPane paneKey="Pane4">Property</SplitViewPane>
      </SplitView>
    </div>
  );
};
```

---

## API

### `SplitView`

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paneData</td>
      <td>Pane configuration data.</td>
      <td>`SplitViewPaneInfo[]`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>layout</td>
      <td>Layout direction; horizontal: Pane is arranged horizontally vertical: Pane is arranged vertically.</td>
      <td>`horizontal | vectical`</td>
      <td>`horizontal`</td>
    </tr>
    <tr>
      <td>sashSize</td>
      <td>The width of the dividing line between the two Panes (height when layout=horizontal)</td>
      <td>`number`</td>
      <td>5</td>
    </tr>
    <tr>
      <td>hoverDelay</td>
      <td>Mouse Hover delay. 0 does not delay.</td>
      <td>`number`</td>
      <td>300</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>
      Triggered when the layout changes after dragging Sash due to container size changes. If you need to save the layout, you can save the paneData parameter and pass it to the SplitView.paneData property when you need to load the layout.
      </td>
      <td>`(paneData:SplitViewPaneInfo[])=>void`</td>
      <td>-</td>
    </tr>
  </tbody>
</table>


### `SplitViewPane`

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paneKey</td>
      <td>
      The unique Key of the Pane, which corresponds to the paneKey in SplitViewPaneInfo. Use paneKey to practice the relationship between SplitViewPane component and paneData.
      </td>
      <td>`string`</td>
      <td>-</td>
    </tr>
  </tbody>
</table>


### `SplitViewPaneInfo`

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paneKey</td>
      <td>
      The unique Key of the Pane, corresponding to SplitViewPane.paneKey. Use paneKey to practice the relationship between SplitViewPane component and paneData.
      </td>
      <td>`string`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>minSize</td>
      <td>Smallest size.</td>
      <td>`number`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Current size. The real-time size will be calculated based on the container size, priority, etc.</td>
      <td>`number`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>maxSize</td>
      <td>
      Biggest size. biggest size. If all maxSize values ​​in SplitView.paneData are set, then the maxSize of the last Pane is invalid.
      </td>
      <td>`number`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>snapable</td>
      <td>Is it possible to dock. The snapped attribute is only valid when true.</td>
      <td>`boolean`</td>
      <td>false</td>
    </tr>
    <tr>
      <td>snapped</td>
      <td>Is it docked. Only valid if snapable is true.</td>
      <td>`boolean`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>snappedSize</td>
      <td>Docked size.</td>
      <td>`boolean`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>priority</td>
      <td>Panes with higher values ​​are resized first.</td>
      <td>`number`</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

---

## Global Method

It is used to support the movement of Pane in the same SplitView or between different SplitViews. If you need to implement operations such as Pane's moving, dragging and dropping, layout configuration, etc., these methods can help you.

#### `paneMoveTo`: Move the Pane corresponding to paneKey to the specified position.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paneData</td>
      <td>Pane data.</td>
      <td>`SplitViewPaneInfo[]`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>sourcePaneKey</td>
      <td>The paneKey of the Pane to move.</td>
      <td>`string`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>destinationPaneKey</td>
      <td>The paneKey to move to.</td>
      <td>`string`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>behand</td>
      <td>Whether it is behind the target Pane.</td>
      <td>`boolean`</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### `paneMoveToLast`: Move the Pane corresponding to paneKey to the last position.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paneData</td>
      <td>Pane data.</td>
      <td>`SplitViewPaneInfo[]`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>sourcePaneKey</td>
      <td>The paneKey of the Pane to move.</td>
      <td>`string`</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### `paneMoveToFirst`: Move the Pane corresponding to paneKey to the front position.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paneData</td>
      <td>Pane data.</td>
      <td>`SplitViewPaneInfo[]`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>sourcePaneKey</td>
      <td>The paneKey of the Pane to move.</td>
      <td>`string`</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### `paneCut`: Cut the Pane corresponding to paneKey. Remove the Pane with the specified paneKay from paneData and return this Pane.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paneData</td>
      <td>Pane data.</td>
      <td>`SplitViewPaneInfo[]`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>sourcePaneKey</td>
      <td>The paneKey of the Pane to cut.</td>
      <td>`string`</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

**Return value**: __Pane data corresponding to sourcePaneKey.__


#### `panePaste`: Paste the Pane corresponding to the paneKey to the specified position, and support cutting and pasting between paneData of different SplitViews.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>srcPane</td>
      <td>
      The Pane data to paste. It can be derived from the return value of cutPane, or it can be a new Pane data.
      </td>
      <td>`SplitViewPaneInfo`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>destPaneData</td>
      <td>paneData to paste into</td>
      <td>`SplitViewPaneInfo[]`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>paneKey</td>
      <td>Destination paneKey to paste into.</td>
      <td>`string`</td>
      <td>-</td>
    </tr>
    <tr>
      <td>behand</td>
      <td>Whether it is behind the target Pane.</td>
      <td>`boolean`</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

> If you want to move the Pane across the SplitView, remember that the SplitView should contain the SplitViewPane component corresponding to the paneKey.
