import React from 'react';

import Menu from './menu/Menu';
import Userbar from './userbar/Userbar';

import './style.scss';

const Header = () => {
  return (
    <div className="header-container">
      <Userbar />
      <Menu />
    </div>
  );
};

export default Header;
