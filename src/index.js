import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
);

