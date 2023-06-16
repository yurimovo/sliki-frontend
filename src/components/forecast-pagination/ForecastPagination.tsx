import React from 'react';

import Qualifying from './qualifying/Qualifying';
import Race from './race/Race';

import './style.scss';

const ForecastPagination = () => {
  return (
    <>
      <Qualifying />
      <Race />
    </>
  );
};

export default ForecastPagination;
