import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsScrolled(scrollY > 10);
  }, [scrollY]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Problem', path: '/problem' },
    { name: 'Analysis', path: '/analysis' },
    { name: 'Findings', path: '/findings' },
    { name: 'Team', path: '/team' },
    { name: 'Resources', path: '/resources' }
  ];
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
          onClick={closeMenu}
        >
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">UH</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-primary-800' : 'text-primary-700'}`}>
              UrbanHealthScope
            </span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${isActive 
                  ? 'text-primary-700 bg-primary-50' 
                  : `${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600'} hover:bg-neutral-100`
                }
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-700 p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral-100 shadow-lg"
          >
            <div className="container py-3">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `
                      px-4 py-3 rounded-lg text-base font-medium
                      ${isActive 
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100'
                      }
                    `}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;