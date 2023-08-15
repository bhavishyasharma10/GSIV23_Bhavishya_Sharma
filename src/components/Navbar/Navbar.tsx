import React from 'react';
import './Navbar.scss';
import SearchBar from '../SearchBar/SearchBar';

interface NavbarProps {
  isDetailPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDetailPage = false }) => {
  return (
    <div className="navbar">
      {isDetailPage ? (
        <div className="navbar__details-header">
          Movie Details
        </div>
      ) : (<SearchBar search='' setSearch={(search) => (console.log(search))} /> )}

      <div className="navbar__logo">
        <img src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
}

Navbar.displayName = 'Navbar';

export default Navbar;