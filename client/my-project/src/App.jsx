import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import { CartProvider } from './contects/CartProvider'; // Import CartProvider

const App = () => {
  const location = useLocation();
  const isSignupPage = location.pathname === '/';
  const isLogin = location.pathname === '/signup'

  return (
    <CartProvider> {/* Wrap the component tree with CartProvider */}
      <div>
        {!isLogin && !isSignupPage && <Navbar />} {/* Render Navbar if not on the signup page */}
        <div className='min-h-screen'>
          <Outlet /> {/* This is where child routes will be rendered */}
        </div>
        { !isLogin && !isSignupPage && <MyFooter />} {/* Render MyFooter if not on the signup page */}
      </div>
    </CartProvider>
  );
};

export default App;
