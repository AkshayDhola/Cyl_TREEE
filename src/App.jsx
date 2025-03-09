import React from 'react';
import Cyl from './Cyl';

function App() {
  return (
    <>
      <div className="w-full h-screen bg-slate-300 relative overflow-hidden">
        <Cyl boxColor='white' />
      </div>
      <div className="w-full h-screen bg-sky-200">
        <h1>hello</h1>
      </div>
    </>
  );
}

export default App;
