import React from 'react';
import { Link } from 'react-router-dom';
import { FaArchive, FaSearch, FaHome, FaBoxOpen, FaBriefcase, FaCommentDots, FaBell } from 'react-icons/fa';
import '../styles/achievehub.css';

const Navbar = () => {
  return (
    <nav className="linkedin-nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <FaArchive size={34} color="#2c3e50" />
          <span className="brand-name">ArchiveHub</span>
        </Link>
        
        <div className="nav-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-item">
            <FaHome size={24} />
            <span>Home</span>
          </Link>
          <Link to="/collections" className="nav-item">
            <FaBoxOpen size={24} />
            <span>Collections</span>
          </Link>
          <Link to="/jobs" className="nav-item">
            <FaBriefcase size={24} />
            <span>Jobs</span>
          </Link>
          <Link to="/messaging" className="nav-item">
            <FaCommentDots size={24} />
            <span>Messaging</span>
          </Link>
          <Link to="/notifications" className="nav-item">
            <FaBell size={24} />
            <span>Notifications</span>
          </Link>
          <Link to="/profile" className="nav-item profile-link">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Profile"
              className="nav-profile-image"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
