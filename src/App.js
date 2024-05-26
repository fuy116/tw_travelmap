import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


import React from 'react';
import './css/App.css';
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
