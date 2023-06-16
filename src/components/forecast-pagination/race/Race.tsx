import React from 'react';

import Basket from '../../cards/basket-card/Basket';
import Pilots from '../../cards/pilots/Pilots';

import './style.scss';

const Race = () => {
  return (
    <>
      <div>Race</div>
      <div>
        <Basket />
        <Pilots />
      </div>
    </>
  );
};

export default Race;
