import React from 'react';

import CurrentEvent from './current-event/CurrentEvent';
import NextEvent from './next-event/NextEvent';

import './style.scss';

const Events = () => {
  return (
    <div className="events__main">
      <CurrentEvent />
      <NextEvent />
    </div>
  );
};

export default Events;
