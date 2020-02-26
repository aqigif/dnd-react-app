import React from 'react';
import Kuda from './Kuda';
import Box from './Box';

function App() {
  const [page, setPage] = React.useState('kuda');

  const appRender = () => {
    switch (page) {
      case 'kuda':
        return <Kuda />
      case 'box':
        return <Box />
      default:
        return <div />
    }
  }
  return (
    <div className="App">
      <button onClick={() => setPage('kuda')}>Kuda</button>
      <button onClick={() => setPage('box')}>Box</button>
      <div>
        {appRender()}
      </div>
    </div>
  );
}

export default App;
