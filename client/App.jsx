import React, { useState, useEffect }from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../client/components/Header.jsx';
import Body from '../client/components/Body.jsx';

const App = () => {
  return (
    <>
      <Header/>
      <Body/>
    </>    
  )
};


export default App;