import React, { useState, useEffect }from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../client/components/Header';

const App = () => {
  return (
    <div id='app'>
      <h1>Hello</h1>
      <Header/>
    </div>
  )
}


export default App;