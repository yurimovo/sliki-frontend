import React from 'react';

import Events from '../../components/events-block/Events';
import Positions from '../../components/positions/Positions';

import './style.scss';

const MainPage = () => {
  return (
    <div>
      <Events />
      <Positions />
    </div>
  );
};

export default MainPage;
