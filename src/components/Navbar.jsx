import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Thermometer, User, Mail, Menu, X } from 'lucide-react'; //for icons

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const pages = {
    '/': 'Home',
    '/temperature': 'Temperature',
    '/about': 'About',
    '/contact': 'Contact'
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <Home className="icon-blue" />
            <span className="logo-text">SmartHome</span>
          </Link>

          {/* Desktop Menu */}
          <div className="menu-desktop">
            <Link
              to="/"
              className={`menu-btn ${isActive('/') ? 'menu-active' : ''}`}
            >
              <Home className="icon" />
              <span>Home</span>
            </Link>
            <Link
              to="/temperature"
              className={`menu-btn ${isActive('/temperature') ? 'menu-active' : ''}`}
            >
              <Thermometer className="icon" />
              <span>Temperature</span>
            </Link>
            <Link
              to="/about"
              className={`menu-btn ${isActive('/about') ? 'menu-active' : ''}`}
            >
              <User className="icon" />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className={`menu-btn ${isActive('/contact') ? 'menu-active' : ''}`}
            >
              <Mail className="icon" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="menu-mobile-btn"
          >
            {mobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="menu-mobile">
            <div className="menu-mobile-list">
              {Object.entries(pages).map(([path, label]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`menu-mobile-item ${isActive(path) ? 'menu-active' : ''}`}
                >
                  {path === '/' && <Home className="icon" />}
                  {path === '/temperature' && <Thermometer className="icon" />}
                  {path === '/about' && <User className="icon" />}
                  {path === '/contact' && <Mail className="icon" />}
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
