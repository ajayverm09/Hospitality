// components/Navbar.js
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <nav className="text-[#F77300] bg-white w-full shadow-lg fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo - Clickable to Home */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://noblehealthcity.com/img/noble/noble-logo.png" 
            alt="Noble Health City Logo" 
            className="h-10 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/about" 
            className={`font-medium transition duration-300 ${
              location.pathname === '/about' 
                ? 'text-[#F77300] border-b-2 border-[#F77300] font-semibold' 
                : 'text-[#F77300] hover:text-[#d96500]'
            }`}
          >
            About
          </Link>
          <Link 
            to="/blogs" 
            className={`font-medium transition duration-300 ${
              location.pathname === '/blogs' 
                ? 'text-[#F77300] border-b-2 border-[#F77300] font-semibold' 
                : 'text-[#F77300] hover:text-[#d96500]'
            }`}
          >
            Blogs
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium transition duration-300 ${
              location.pathname === '/contact' 
                ? 'text-[#F77300] border-b-2 border-[#F77300] font-semibold' 
                : 'text-[#F77300] hover:text-[#d96500]'
            }`}
          >
            Contact
          </Link>
          {/* Appointment Button for Desktop */}
          <Link to="/appointment">
            <button className="text-white bg-[#F77300] font-medium cursor-pointer px-4 py-2 rounded-lg transition duration-300 hover:bg-[#d96500]">
              Appointment
            </button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#F77300] focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <Link 
            to="/about" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md font-medium transition duration-300 ${
              location.pathname === '/about' 
                ? 'text-[#F77300] bg-orange-50 font-semibold' 
                : 'text-[#F77300] hover:bg-orange-50'
            }`}
          >
            About
          </Link>
          <Link 
            to="/blogs" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md font-medium transition duration-300 ${
              location.pathname === '/blogs' 
                ? 'text-[#F77300] bg-orange-50 font-semibold' 
                : 'text-[#F77300] hover:bg-orange-50'
            }`}
          >
            Blogs
          </Link>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md font-medium transition duration-300 ${
              location.pathname === '/contact' 
                ? 'text-[#F77300] bg-orange-50 font-semibold' 
                : 'text-[#F77300] hover:bg-orange-50'
            }`}
          >
            Contact
          </Link>
          {/* Appointment Button for Mobile */}
          <Link to="/appointment" onClick={closeMenu}>
            <button className="w-full text-white bg-[#F77300] font-medium px-4 py-2 rounded-lg transition duration-300 hover:bg-[#d96500] mt-2">
              Appointment
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;