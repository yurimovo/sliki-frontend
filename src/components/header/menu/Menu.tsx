import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Menu = () => {
  return (
    <nav className="container">
      <ul className="menu__ul-container">
        <li>
          <a href="#">
            <Link to="/">Главная</Link>
          </a>
        </li>
        <li>
          <a href="#">
            <Link to="/forecast">Сделать прогноз</Link>
          </a>
        </li>
        <li>
          <a href="#">
            <Link to="/personal">Мои прогнозы</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
