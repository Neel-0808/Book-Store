// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import { AuthProvider } from './contects/AuthProvider'; // Ensure the correct path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* AuthProvider wrapping the RouterProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
