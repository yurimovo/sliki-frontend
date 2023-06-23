import React from 'react';

import Teams from '../../cards/teams/Teams';
import Pilots from '../../cards/pilots/Pilots';

import './style.scss';

const Qualifying = () => {
  return (
    <>
      <div>Qualifying</div>
      <div>
        <Teams />
        <Pilots />
      </div>
    </>
  );
};

export default Qualifying;
