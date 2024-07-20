import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import Blog from '../components/Blog';
import Shop from '../components/Shop';
import About from '../components/About';
import Navbar from '../components/Navbar';
import SingleBook from '../components/SingleBook';
import DashboardLayout from '../dashboard/DashboardLayout';
import UploadBook from '../dashboard/UploadBook';
import Dashboard from '../dashboard/Dashboard';
import ManageBooks from '../dashboard/ManageBooks';
import EditBooks from '../dashboard/EditBooks';
import SIgnup from '../components/SIgnup';
import BlogPost from '../components/BlogPost';
import Cart from '../components/Cart'; // Import Cart component
import Logout from '../dashboard/Logout';
import Login from '../components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <SIgnup />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'navbar',
        element: <Navbar />,
      },
      {
        path: 'book/:id',
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path: 'blog/:id',
        element: <BlogPost />
      },
      {
        path: 'cart',
        element: <Cart /> // Add the Cart route
      },
      {
        path:'signup',
        element:<Login />
      }
    ],
  },
  // Backend
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      }
   
    ]
  },
   {
      path:"/admin/dashboard/logout",
      element:<Logout />
    }
]);

export default router;
