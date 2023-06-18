import React from 'react';

import CurrentEvent from './current-event/CurrentEvent';
import NextEvent from './next-event/NextEvent';

import './style.scss';

const Events = () => {
  return (
    <div className='container'>
      <div className='events__main'>
        <div className='events__current'>
          <CurrentEvent />
        </div>
        <div className='events__next'>
          <NextEvent />
        </div>
      </div>
    </div>
  );
};

export default Events;
