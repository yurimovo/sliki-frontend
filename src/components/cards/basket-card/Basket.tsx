import React from 'react';

import BasketItem from './basket-item/BasketItem';

import './style.scss';

const Basket = () => {
  return (
    <div className='basket-container'>
      <BasketItem />
    </div>
  );
};

export default Basket;
