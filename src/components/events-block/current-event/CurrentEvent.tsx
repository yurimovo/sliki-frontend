import React from 'react';

import Flag from '../../../assets/pictures/flags/canada.jpg';

import './style.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CurrentEvent = () => {
  return (
    <div className="events__current-event__main">
      <div className="events__current-event__block-header">
        Ближайший Гран-при
      </div>
      <div className="events__current-event__content">
        <img
          className="current-event__event-content__flag"
          src={Flag}
          alt="Flag"
        />
        <div className="current-event__event-content__event-date">16-18.06</div>
        <Button type="button" className="btn btn-success">
          <Link to="/new_forecast" style={{ textDecoration: "none", color: "#fff" }}>Сделать прогноз</Link>
        </Button>
      </div>
    </div>
  );
};

export default CurrentEvent;
