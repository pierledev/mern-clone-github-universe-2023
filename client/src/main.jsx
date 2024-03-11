import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppProvider from './context/appContext';
import { Toaster } from 'react-hot-toast';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster />
      <App />
    </AppProvider>
  </React.StrictMode>
);
