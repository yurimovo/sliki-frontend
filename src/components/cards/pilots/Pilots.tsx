import React, { useState } from 'react';
import { Reorder } from 'framer-motion';

import { Pilot } from './pilot/Pilot';

import { PilotInList } from '../../../types/pilots';

import './style.scss';

const Pilots = () => {
  const [items, setItems] = useState<Array<PilotInList>>([
    {id: 1, pilotName: 'VER', pilotNumber: '33'},
    {id: 2, pilotName: 'PER', pilotNumber: '11'},
    {id: 3, pilotName: 'LEC', pilotNumber: '16'},
    {id: 4, pilotName: 'SAI', pilotNumber: '55'},
    {id: 5, pilotName: 'HAM', pilotNumber: '44'},
    {id: 6, pilotName: 'RUS', pilotNumber: '63'},
    {id: 7, pilotName: 'OCO', pilotNumber: '31'},
    {id: 8, pilotName: 'GAS', pilotNumber: '10'},
    {id: 9, pilotName: 'PIA', pilotNumber: '28'},
    {id: 10, pilotName: 'NOR', pilotNumber: '4'},
    {id: 11, pilotName: 'BOT', pilotNumber: '77'},
    {id: 12, pilotName: 'ZHO', pilotNumber: '24'},
    {id: 13, pilotName: 'STR', pilotNumber: '18'},
    {id: 14, pilotName: 'ALO', pilotNumber: '14'},
    {id: 15, pilotName: 'MAG', pilotNumber: '20'},
    {id: 16, pilotName: 'HUL', pilotNumber: '27'},
    {id: 17, pilotName: 'DEV', pilotNumber: '21'},
    {id: 18, pilotName: 'TSU', pilotNumber: '22'},
    {id: 19, pilotName: 'ALB', pilotNumber: '23'},
    {id: 20, pilotName: 'SAR', pilotNumber: '2'}
  ])

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} className='pilots-container'>
      {items.map(item => (
        <Reorder.Item 
          key={item.id} 
          value={item}
          whileDrag={{
            scale: 1.1,
            boxShadow: "rgba(0,0,0,0.12) 8px 1px 3px, rgba(0,0,0,0.24) 0px 1px 2px"
          }}
        >
          <Pilot pilot={item} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default Pilots;
