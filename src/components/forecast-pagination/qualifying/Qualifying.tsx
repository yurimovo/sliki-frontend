import React from 'react';

import Pilots from '../../cards/pilots/Pilots';

import './style.scss';

const Qualifying = () => {
  return (
    <>
      <div className='qualify-header'>Квалификация</div>
      <div>
        <Pilots />
      </div>
    </>
  );
};

export default Qualifying;
