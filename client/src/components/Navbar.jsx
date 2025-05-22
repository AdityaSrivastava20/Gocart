import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext.jsx';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/user/logout');
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate('/products');
    }
  }, [searchQuery]);

  const navLinkStyle = ({ isActive }) =>
    `relative px-2 py-1 transition-all duration-200 hover:text-primary hover:after:w-full 
     after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary 
     after:transition-all after:duration-300 ${
       isActive ? 'text-primary after:w-full' : 'after:w-0'
     }`;

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3 border-b border-gray-300 bg-white relative transition-all z-50">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img
          className="h-10 scale-250 transform object-contain px-8 cursor-pointer "
          src={assets.logo}
          alt="logo"
        />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6">
        <NavLink to="/" className={navLinkStyle} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" className={navLinkStyle} onClick={() => setOpen(false)}>
          All Product
        </NavLink>
        <NavLink to="/contact" className={navLinkStyle} onClick={() => setOpen(false)}>
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 focus:placeholder-transparent transition duration-200"
            type="text"
            placeholder="Search products"
          />
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 h-4 hover:scale-110 transition-transform"
          />
        </div>

        <div
          onClick={() => navigate('/cart')}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80 hover:scale-110 transition-transform duration-150"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-green-600 hover:scale-105 transition-all duration-200 text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-10 hover:scale-105 transition-transform cursor-pointer"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-lg border border-gray-200 py-2.5 w-30 rounded-lg text-sm z-40">
              <li
                onClick={() => navigate('my-orders')}
                className="p-2 px-4 hover:bg-primary/10 cursor-pointer transition"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-2 px-4 hover:bg-primary/10 cursor-pointer transition"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate('/cart')}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80 hover:scale-110 transition-transform duration-150"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="transition-transform hover:scale-110"
        >
          <img src={assets.menu_icon} alt="menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="z-50 absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-2 px-5 text-sm md:hidden transition-all">
          <NavLink to="/" onClick={() => setOpen(false)} className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)} className={navLinkStyle}>
            All Product
          </NavLink>
          {user && (
            <NavLink to="/my-orders" onClick={() => setOpen(false)} className={navLinkStyle}>
              My Orders
            </NavLink>
          )}
          <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkStyle}>
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-green-600 hover:scale-105 transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-green-600 hover:scale-105 transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
