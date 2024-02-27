import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import CoursesProvider from './context/CoursesContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CoursesProvider>
          <App />
        </CoursesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
