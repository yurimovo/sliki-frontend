import React from 'react';
import { useDrag } from "react-dnd";

import { PilotInList } from '../../../../types/pilots';

import './style.scss';

interface IPilot {
  pilot: PilotInList,
  idx: number
}

export const Pilot: React.FC<IPilot> = ({ pilot }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'pet',
        item: { pilot },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

  return (
    <div className='pilot__container' ref={dragRef}>
      <div className='pilot__name'>
        {pilot.pilotName}
      </div>
      <div className='pilot__number'>
        {pilot.pilotNumber}
      </div>
        {isDragging && 'Oops'}
    </div>
  )
};