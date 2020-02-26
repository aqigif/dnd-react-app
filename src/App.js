import React from 'react';
import Kuda from './Kuda';

function App() {
  const [page, setPage] = React.useState('kuda');

  const appRender = () => {
    switch (page) {
      case 'kuda':
        return <Kuda />
      case 'appBuilder':
        return <Kuda />
      default:
        return <div />
    }
  }
  return (
    <div className="App">
      <button onClick={() => setPage('kuda')}>Kuda</button>
      <button onClick={() => setPage('appBuilder')}>appBuilder</button>
      <div>
        {appRender()}
      </div>
    </div>
  );
}

export default App;
