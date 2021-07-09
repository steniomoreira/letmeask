import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./contexts/ThemeContext";
import App from './App';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);