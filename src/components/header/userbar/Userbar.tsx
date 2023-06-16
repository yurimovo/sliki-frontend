import React from 'react';
import Logo from '../../../assets/pictures/logo.png';

import './style.scss';

const Userbar = () => {
  return (
    <div>
      <img className="header__logo" src={Logo} alt="Logo" />
    </div>
  );
};

export default Userbar;
