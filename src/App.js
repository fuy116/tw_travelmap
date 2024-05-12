import React from 'react';
import './App.css';
import Maps from './maps.js';
import Home from './homepage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} > 
          <Route path=":city_id" element={"找不到頁面"} />
        </Route>
        <Route path="*" element={"找不到頁面"} /> 
 
      </Routes>
     
    </BrowserRouter>
   

    
  );
}

export default App;
