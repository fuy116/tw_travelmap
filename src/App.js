
import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Editor } from "primereact/editor";
import { SpeedDial } from 'primereact/speeddial';

import React from 'react';
import './App.css';
import Maps from './maps.js';
import Home from './homepage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Testa from './com_test.js';
import Blog from './blog.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Blog />} /> 
        <Route path="/maps" element={<Maps />} >     
          <Route path=":city_id" element={"找不到頁面"} />
        </Route>
        <Route path="*" element={"找不到頁面"} /> 
 
      </Routes>
     
    </BrowserRouter>
   

    
  );
}

export default App;
