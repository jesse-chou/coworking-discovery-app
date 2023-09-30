import React, { useState, useEffect }from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../client/components/Header.jsx';
import Body from '../client/components/Body.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='main'>
      <Header/>
      <Body/>
      <Footer/>
    </div>    
  )
};


export default App;