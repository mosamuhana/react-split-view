import{j as e}from"./jsx-runtime-94f6e698.js";import{M as s}from"./index-9248cff1.js";import{u as r}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-cfde9eea.js";import"../sb-preview/runtime.js";import"./index-ed27a914.js";import"./index-d475d2ea.js";import"./index-8ce4a492.js";import"./index-d37d4223.js";import"./isNativeReflectConstruct-3f48c230.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",hr:"hr",pre:"pre",code:"code",h3:"h3",h4:"h4",strong:"strong",blockquote:"blockquote"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Getting started"}),`
`,e.jsx(n.h1,{id:"react-splitview",children:"React SplitView"}),`
`,e.jsx(n.p,{children:"A React component that imitates VS Code SplitView. As far as I know, the SplitView function is available, if not, please submit an Issue."}),`
`,e.jsx(n.h2,{id:"-characteristic",children:"✨ Characteristic"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"🌈 VSCode similar SplitView function"}),`
`,e.jsx(n.li,{children:"📦 Support priority, when the parent container changes size or drags Sash, the one with higher priority will be resized first"}),`
`,e.jsx(n.li,{children:"🛡 Support minimum size and maximum size constraints"}),`
`,e.jsx(n.li,{children:"⚙️ Support docking"}),`
`,e.jsx(n.li,{children:"🌍 Support fixed Pane"}),`
`,e.jsx(n.li,{children:"🎨 Support for chain reactions"}),`
`,e.jsx(n.li,{children:"⛪ Support Hover Delay"}),`
`,e.jsx(n.li,{children:"🎷 Support for layout storage"}),`
`,e.jsx(n.li,{children:"📚 Nested layouts are supported"}),`
`]}),`
`,e.jsx(n.h2,{id:"-environment",children:"🖥 Environment"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Modern browsers and Internet Explorer 11 (with ",e.jsx(n.a,{href:"https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11",target:"_blank",rel:"nofollow noopener noreferrer",children:"polyfills"}),")"]}),`
`,e.jsx(n.li,{children:"Server-side Rendering"}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.electronjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Electron"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("a",{href:"http://godban.github.io/browsers-support-badges",target:"_blank",children:e.jsx("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"})})}),e.jsx("td",{children:e.jsx("a",{href:"http://godban.github.io/browsers-support-badges",target:"_blank",children:e.jsx("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"})})}),e.jsx("td",{children:e.jsx("a",{href:"http://godban.github.io/browsers-support-badges",target:"_blank",children:e.jsx("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"})})}),e.jsx("td",{children:e.jsx("a",{href:"http://godban.github.io/browsers-support-badges",target:"_blank",children:e.jsx("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"})})}),e.jsx("td",{children:e.jsx("a",{href:"http://godban.github.io/browsers-support-badges",target:"_blank",children:e.jsx("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE, Edge"}),e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"Electron"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE11, Edge"}),e.jsx("td",{children:"last 2 versions"}),e.jsx("td",{children:"last 2 versions"}),e.jsx("td",{children:"last 2 versions"}),e.jsx("td",{children:"last 2 versions"})]})]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-install",children:"📦 Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @devteks/react-split-view
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @devteks/react-split-view
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"splitview",children:e.jsx(n.code,{children:"SplitView"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"paneData"}),e.jsx("td",{children:"Pane configuration data."}),e.jsx("td",{children:e.jsx(n.code,{children:"SplitViewPaneInfo[]"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"layout"}),e.jsx("td",{children:"Layout direction; horizontal: Pane is arranged horizontally vertical: Pane is arranged vertically."}),e.jsx("td",{children:e.jsx(n.code,{children:"horizontal | vectical"})}),e.jsx("td",{children:e.jsx(n.code,{children:"horizontal"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sashSize"}),e.jsx("td",{children:"The width of the dividing line between the two Panes (height when layout=horizontal)"}),e.jsx("td",{children:e.jsx(n.code,{children:"number"})}),e.jsx("td",{children:"5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hoverDelay"}),e.jsx("td",{children:"Mouse Hover delay. 0 does not delay."}),e.jsx("td",{children:e.jsx(n.code,{children:"number"})}),e.jsx("td",{children:"300"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onChange"}),e.jsx("td",{children:e.jsx(n.p,{children:"Triggered when the layout changes after dragging Sash due to container size changes. If you need to save the layout, you can save the paneData parameter and pass it to the SplitView.paneData property when you need to load the layout."})}),e.jsx("td",{children:e.jsx(n.code,{children:"(paneData:SplitViewPaneInfo[])=>void"})}),e.jsx("td",{children:"-"})]})]})]}),`
`,e.jsx(n.h3,{id:"splitviewpane",children:e.jsx(n.code,{children:"SplitViewPane"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"paneKey"}),e.jsx("td",{children:e.jsx(n.p,{children:"The unique Key of the Pane, which corresponds to the paneKey in SplitViewPaneInfo. Use paneKey to practice the relationship between SplitViewPane component and paneData."})}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]})})]}),`
`,e.jsx(n.h3,{id:"splitviewpaneinfo",children:e.jsx(n.code,{children:"SplitViewPaneInfo"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"paneKey"}),e.jsx("td",{children:e.jsx(n.p,{children:"The unique Key of the Pane, corresponding to SplitViewPane.paneKey. Use paneKey to practice the relationship between SplitViewPane component and paneData."})}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"minSize"}),e.jsx("td",{children:"Smallest size."}),e.jsx("td",{children:e.jsx(n.code,{children:"number"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsx("td",{children:"Current size. The real-time size will be calculated based on the container size, priority, etc."}),e.jsx("td",{children:e.jsx(n.code,{children:"number"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxSize"}),e.jsx("td",{children:e.jsx(n.p,{children:"Biggest size. biggest size. If all maxSize values ​​in SplitView.paneData are set, then the maxSize of the last Pane is invalid."})}),e.jsx("td",{children:e.jsx(n.code,{children:"number"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"snapable"}),e.jsx("td",{children:"Is it possible to dock. The snapped attribute is only valid when true."}),e.jsx("td",{children:e.jsx(n.code,{children:"boolean"})}),e.jsx("td",{children:"false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"snapped"}),e.jsx("td",{children:"Is it docked. Only valid if snapable is true."}),e.jsx("td",{children:e.jsx(n.code,{children:"boolean"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"snappedSize"}),e.jsx("td",{children:"Docked size."}),e.jsx("td",{children:e.jsx(n.code,{children:"boolean"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"priority"}),e.jsx("td",{children:"Panes with higher values ​​are resized first."}),e.jsx("td",{children:e.jsx(n.code,{children:"number"})}),e.jsx("td",{children:"0"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"global-method",children:"Global Method"}),`
`,e.jsx(n.p,{children:"It is used to support the movement of Pane in the same SplitView or between different SplitViews. If you need to implement operations such as Pane's moving, dragging and dropping, layout configuration, etc., these methods can help you."}),`
`,e.jsxs(n.h4,{id:"panemoveto-move-the-pane-corresponding-to-panekey-to-the-specified-position",children:[e.jsx(n.code,{children:"paneMoveTo"}),": Move the Pane corresponding to paneKey to the specified position."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"paneData"}),e.jsx("td",{children:"Pane data."}),e.jsx("td",{children:e.jsx(n.code,{children:"SplitViewPaneInfo[]"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sourcePaneKey"}),e.jsx("td",{children:"The paneKey of the Pane to move."}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"destinationPaneKey"}),e.jsx("td",{children:"The paneKey to move to."}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behand"}),e.jsx("td",{children:"Whether it is behind the target Pane."}),e.jsx("td",{children:e.jsx(n.code,{children:"boolean"})}),e.jsx("td",{children:"false"})]})]})]}),`
`,e.jsxs(n.h4,{id:"panemovetolast-move-the-pane-corresponding-to-panekey-to-the-last-position",children:[e.jsx(n.code,{children:"paneMoveToLast"}),": Move the Pane corresponding to paneKey to the last position."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"paneData"}),e.jsx("td",{children:"Pane data."}),e.jsx("td",{children:e.jsx(n.code,{children:"SplitViewPaneInfo[]"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sourcePaneKey"}),e.jsx("td",{children:"The paneKey of the Pane to move."}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]})]})]}),`
`,e.jsxs(n.h4,{id:"panemovetofirst-move-the-pane-corresponding-to-panekey-to-the-front-position",children:[e.jsx(n.code,{children:"paneMoveToFirst"}),": Move the Pane corresponding to paneKey to the front position."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"paneData"}),e.jsx("td",{children:"Pane data."}),e.jsx("td",{children:e.jsx(n.code,{children:"SplitViewPaneInfo[]"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sourcePaneKey"}),e.jsx("td",{children:"The paneKey of the Pane to move."}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]})]})]}),`
`,e.jsxs(n.h4,{id:"panecut-cut-the-pane-corresponding-to-panekey-remove-the-pane-with-the-specified-panekay-from-panedata-and-return-this-pane",children:[e.jsx(n.code,{children:"paneCut"}),": Cut the Pane corresponding to paneKey. Remove the Pane with the specified paneKay from paneData and return this Pane."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"paneData"}),e.jsx("td",{children:"Pane data."}),e.jsx("td",{children:e.jsx(n.code,{children:"SplitViewPaneInfo[]"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sourcePaneKey"}),e.jsx("td",{children:"The paneKey of the Pane to cut."}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Return value"}),": ",e.jsx(n.strong,{children:"Pane data corresponding to sourcePaneKey."})]}),`
`,e.jsxs(n.h4,{id:"panepaste-paste-the-pane-corresponding-to-the-panekey-to-the-specified-position-and-support-cutting-and-pasting-between-panedata-of-different-splitviews",children:[e.jsx(n.code,{children:"panePaste"}),": Paste the Pane corresponding to the paneKey to the specified position, and support cutting and pasting between paneData of different SplitViews."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Parameter"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"srcPane"}),e.jsx("td",{children:e.jsx(n.p,{children:"The Pane data to paste. It can be derived from the return value of cutPane, or it can be a new Pane data."})}),e.jsx("td",{children:e.jsx(n.code,{children:"SplitViewPaneInfo"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"destPaneData"}),e.jsx("td",{children:"paneData to paste into"}),e.jsx("td",{children:e.jsx(n.code,{children:"SplitViewPaneInfo[]"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"paneKey"}),e.jsx("td",{children:"Destination paneKey to paste into."}),e.jsx("td",{children:e.jsx(n.code,{children:"string"})}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"behand"}),e.jsx("td",{children:"Whether it is behind the target Pane."}),e.jsx("td",{children:e.jsx(n.code,{children:"boolean"})}),e.jsx("td",{children:"false"})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"If you want to move the Pane across the SplitView, remember that the SplitView should contain the SplitViewPane component corresponding to the paneKey."}),`
`]})]})}function w(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{w as default};
//# sourceMappingURL=Index-7cfb33b0.js.map