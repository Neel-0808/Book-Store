import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { user, logOut } = useContext(AuthContext);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle profile function
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use effect to handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation items array
  const navItems = [
    { link: "Home", path: "/home" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Blog", path: "/blog" },
    { link: "Cart", path: "/cart" }, // Added Cart before Profile
  ];

  // Handle logout
  const handleLogout = async () => {
    try {
      await logOut();
      // Redirect to homepage or handle post-logout behavior
      window.location.href = '/'; // Redirect to home or login page
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <>
      <header className={`${isSticky ? 'sticky top-0 bg-blue-300 shadow-lg z-50' : ''}`}>
        <nav className="container mx-auto flex items-center justify-between p-4 relative z-50">
          <div>
            <Link to="/home" className='text-2xl font-bold flex items-center text-blue-700 gap-2'>
              Books
            </Link>
          </div>
          <ul className='md:flex space-x-12 hidden relative z-50'>
            {navItems.map(({ link, path }) => (
              <li key={link}>
                <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                  {link}
                </Link>
              </li>
            ))}
            {user && (
              <li className='relative z-50'>
                <button onClick={toggleProfile} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                  {user.email}
                </button>
                {showProfile && !isMobile && (
                  <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50'>
                    <div className='p-4'>
                      <p className='text-gray-800'>Email: {user.email}</p>
                      <p className='text-gray-800'>UID:</p>
                      <div className='overflow-x-auto'>
                        <pre className='whitespace-pre-wrap'>{user.uid}</pre>
                      </div>
                      <button onClick={handleLogout} className='block mt-2 text-red-600 hover:text-red-800'>
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>

          <div className='lg:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0 z-50" : "hidden"}`}>
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                to={path}
                className='block text-base text-white uppercase cursor-pointer'
                onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
              >
                {link}
              </Link>
            ))}
            {user && (
              <div className='relative text-base text-white uppercase cursor-pointer' onClick={toggleProfile}>
                {user.email}
              </div>
            )}
          </div>
        </nav>
      </header>
      {showProfile && isMobile && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-8 rounded shadow-lg'>
            <h2 className='text-2xl mb-4'>Profile Details</h2>
            <p className='mb-2'>Email: {user.email}</p>
            <p className='mb-2'>UID:</p>
            <div className='overflow-x-auto'>
              <pre className='whitespace-pre-wrap'>{user.uid}</pre>
            </div>
            <button className='mt-4 px-4 py-2 bg-blue-700 text-white rounded' onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
