import React from 'react';

import { PilotInList } from '../../../../types/pilots';

import './style.scss';

interface IPilot {
  pilot: PilotInList,
  idx: number
}

const Pilot: React.FC<IPilot> = ({ pilot }) => {
  return (
    <div className='pilot__container'>
      <div className='pilot__name'>
        {pilot.pilotName}
      </div>
      <div className='pilot__number'>
        {pilot.pilotNumber}
      </div>
    </div>

  )
};

export default Pilot;
