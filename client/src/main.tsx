import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import EnrollmentsProvider from './context/EnrollmentsContext';
import CoursesProvider from './context/CoursesContext';
import CartProvider from './context/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CoursesProvider>
          <EnrollmentsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </EnrollmentsProvider>
        </CoursesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
