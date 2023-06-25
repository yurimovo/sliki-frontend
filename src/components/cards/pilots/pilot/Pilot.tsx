import React from 'react';

import { PilotInList } from '../../../../types/pilots';

import './style.scss';

interface IPilot {
  pilot: PilotInList,
  idx: number
}

export const Pilot: React.FC<IPilot> = ({ pilot, idx }) => {
  return (
    <div className='pilot__container'>
      <div className='pilot__order'>
        {idx}
      </div>
      <div className='pilot__name'>
        {pilot.pilotName}
      </div>
      <div className='pilot__number'>
        {pilot.pilotNumber}
      </div>
    </div>
  )
};