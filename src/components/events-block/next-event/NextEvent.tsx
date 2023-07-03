import React from 'react';

import './style.scss';

import Flag from '../../../assets/pictures/flags/austria.jpg';

const NextEvent = () => {
  return (
    <div className="events__current-event__main">
      <div className="events__current-event__block-header">
        Следующий Гран-при
      </div>
      <div className="events__current-event__content">
        <img
          className="current-event__event-content__flag"
          src={Flag}
          alt="Flag"
        />
        <div className="current-event__event-content__event-date">30.06-02.07</div>
      </div>
    </div>
  )
};

export default NextEvent;
