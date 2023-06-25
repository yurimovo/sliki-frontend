import React from 'react';

import Pilots from '../../cards/pilots/Pilots';

import './style.scss';

const Race = () => {
  return (
    <>
      <div className='race-header'>Гонка</div>
      <div>
        <Pilots />
      </div>
    </>
  );
};

export default Race;
