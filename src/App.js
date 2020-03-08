import React from 'react';
import Kuda from './Kuda';
import Box from './Box';
import Builder from './Builder';
import './appstyles.css';

function App() {
  const [page, setPage] = React.useState('builder');

  const appRender = () => {
    switch (page) {
      case 'kuda':
        return <Kuda />
      case 'box':
        return <Box />
      case 'builder':
        return <Builder />
      default:
        return <div />
    }
  }
  return (
    <div className="App">
    {/* //   <button onClick={() => setPage('kuda')}>Kuda</button>
    //   <button onClick={() => setPage('box')}>Box</button>
    //   <button onClick={() => setPage('builder')}>Builder</button> */}
      <div>
        {appRender()}
      </div>
    </div>
  );
}

export default App;
