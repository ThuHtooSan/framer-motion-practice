import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ModalContextProvider } from './contexts/ModalContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </Router>
  </React.StrictMode>
);
