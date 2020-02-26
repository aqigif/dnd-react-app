import React from 'react';
import Example from './example';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

function AppBUilder() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}

export default AppBUilder;
