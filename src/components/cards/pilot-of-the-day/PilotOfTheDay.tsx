import React from "react"
import { Button } from "react-bootstrap";

import "./style.scss"

import {PilotInList} from "../../../types/pilots";

const pilotsList = [
    {id: 1, pilotName: 'Max Verstappen', pilotNumber: '33'},
    {id: 2, pilotName: 'Sergio Perez', pilotNumber: '11'},
    {id: 3, pilotName: 'Charles Leclerc', pilotNumber: '16'},
    {id: 4, pilotName: 'Carlos Sainz', pilotNumber: '55'},
    {id: 5, pilotName: 'Lewis Hamilton', pilotNumber: '44'},
    {id: 6, pilotName: 'George Russell', pilotNumber: '63'},
    {id: 7, pilotName: 'Esteban Ocon', pilotNumber: '31'},
    {id: 8, pilotName: 'Peirre Gasly', pilotNumber: '10'},
    {id: 9, pilotName: 'Oscar Piastri', pilotNumber: '28'},
    {id: 10, pilotName: 'Lando Norris', pilotNumber: '4'},
    {id: 11, pilotName: 'Valtteri Bottas', pilotNumber: '77'},
    {id: 12, pilotName: 'Zhou Guanyu', pilotNumber: '24'},
    {id: 13, pilotName: 'Lance Stroll', pilotNumber: '18'},
    {id: 14, pilotName: 'Fernando Alonso', pilotNumber: '14'},
    {id: 15, pilotName: 'Kevin Magnussen', pilotNumber: '20'},
    {id: 16, pilotName: 'Nico Hulkenberg', pilotNumber: '27'},
    {id: 17, pilotName: 'Nyck de Vries', pilotNumber: '21'},
    {id: 18, pilotName: 'Yuki Tsunoda', pilotNumber: '22'},
    {id: 19, pilotName: 'Alex Albon', pilotNumber: '23'},
    {id: 20, pilotName: 'Logan Sargeant', pilotNumber: '2'}
]

const PilotOfTheDay = () => {
    const handleSubmit = () => {
        console.log('Saved')
    }

    return (
        <>
            <div className='day-pilot-header'>Пилот дня</div>
            <div className='container day-pilot-container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-11'>
                        <select className='form-select form-select-lg' aria-label="Пилот дня">
                            <option selected disabled>Выберите пилота</option>
                            {pilotsList.map((pilot: PilotInList) => {
                                return (
                                    <option value={pilot.pilotNumber}>{pilot.pilotName}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-4'>
                        <Button type='submit' onSubmit={handleSubmit}>Сохранить</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PilotOfTheDay