import React from 'react';

import Basket from '../../cards/basket-card/Basket';
import Pilots from '../../cards/pilots/Pilots';

import './style.scss';

const Qualifying = () => {
  return (
    <>
      <div>Qualifying</div>
      <div>
        <Basket />
        <Pilots />
      </div>
    </>
  );
};

export default Qualifying;
