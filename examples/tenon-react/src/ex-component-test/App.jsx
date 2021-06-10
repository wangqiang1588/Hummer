import React from 'react';

import PageItem from '@common/components/PageItem';
import DemoItem from '@common/components/DemoItem';

function App() {
  return (
    <PageItem title="Component Test">
      <DemoItem title="Base Plugin">
        <ex-webview content="Webview Content"></ex-webview>
      </DemoItem>
      <DemoItem title="Base Plugin Custom Render">
        <ex-popup content="Webview Content" default= {
          <text>I am custom render content!</text>
        }>
        </ex-popup>
      </DemoItem>
    </PageItem>
  );
}

export default App;
