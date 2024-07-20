import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider'; // Ensure the correct path
import googleLogo from "../assets/google-logo.svg"; // Ensure the correct path

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        alert('Login Successfully..');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        alert('Login with Google Successfully..');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    if (username === 'admin' && password === 'admin') {
      alert('Admin Login Successfully..');
      navigate('/admin/dashboard', { replace: true });
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between mb-4">
              <button 
                className={`px-4 py-2 ${!isAdmin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setIsAdmin(false)}
              >
                User Login
              </button>
              <button 
                className={`px-4 py-2 ${isAdmin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setIsAdmin(true)}
              >
                Admin Login
              </button>
            </div>
            {isAdmin ? (
              <div>
                <h1 className="text-2xl font-semibold">Admin Login</h1>
                <form onSubmit={handleAdminLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input id="username" name="username" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Username" required />
                  </div>
                  <div className="relative">
                    <input autoComplete="off" id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Password" required />
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
            ) : (
              <div>
                <h1 className="text-2xl font-semibold">Login Form</h1>
                <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Email address" required />
                  </div>
                  <div className="relative">
                    <input autoComplete="off" id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600" placeholder="Password" required />
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-6 py-2">Login</button>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                </form>
                <p>Don't have an account? <Link to="/signup" className="text-blue-600 underline">Signup</Link> here</p>
                <hr className="my-4" />
                <button onClick={handleGoogleLogin} className="flex items-center gap-2 bg-gray-500 text-white rounded-md px-6 py-2">
                  <img src={googleLogo} alt="Google logo" className="w-6 h-6" />
                  Login with Google
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
