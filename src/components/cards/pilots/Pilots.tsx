import React from 'react';

import Pilot from './pilot/Pilot';

import { PilotInList } from '../../../types/pilots';

import './style.scss';

const pilotsList = [
  {id: 1, pilotName: 'Max Verstappen', pilotNumber: '33'},
  {id: 2, pilotName: 'Sergio Perez', pilotNumber: '11'},
  {id: 3, pilotName: 'Charles Leclerc', pilotNumber: '16'},
  {id: 4, pilotName: 'Carlos Sainz', pilotNumber: '55'},
  {id: 5, pilotName: 'Lewis Hamilton', pilotNumber: '44'},
  {id: 6, pilotName: 'George Russell', pilotNumber: '63'},
  {id: 7, pilotName: 'Fernando Alonso', pilotNumber: '14'},
  {id: 8, pilotName: 'Lance Stroll', pilotNumber: '18'}
]

const Pilots = () => {
  return (
    <div className='pilots-container'>
      {pilotsList.map((onePilot: PilotInList, idx: number) => {
        return (
          <div className="pilot-item">
            <Pilot pilot={onePilot} idx={onePilot.id} />
          </div>
        )
      })}
    </div>
  );
};

export default Pilots;
