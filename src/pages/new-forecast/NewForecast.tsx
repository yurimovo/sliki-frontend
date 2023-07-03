import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import "./style.scss";

import Qualifying from "../../components/forecast-pagination/qualifying/Qualifying";
import Race from "../../components/forecast-pagination/race/Race";
import Fastestlap from "../../components/cards/fastest-lap/Fastestlap";
import Shootout from "../../components/forecast-pagination/shootout/Shootout";
import SprintRace from "../../components/forecast-pagination/sprint-race/SprintRace";
import PilotOfTheDay from "../../components/cards/pilot-of-the-day/PilotOfTheDay";

const eventsArray = [
    {id: 1, eventName: 'Квалификация', evtPredicted: false},
    {id: 1, eventName: 'Шутаут', evtPredicted: false},
    {id: 1, eventName: 'Спринт', evtPredicted: false},
    {id: 1, eventName: 'Гонка', evtPredicted: false},
    {id: 1, eventName: 'Лучший круг', evtPredicted: false},
    {id: 1, eventName: 'Пилот дня', evtPredicted: false}
]

const NewForecast = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);

    return (
        <Tabs 
            className="container container-fluid" 
            selectedIndex={tabIndex} 
            onSelect={(index) => setTabIndex(index)}
            style={{ 
                paddingBottom: "20px",
                maxHeight: "100%"
            }}
        >
            <TabList>
                {eventsArray.map((eventElement) => {
                    return (
                        eventElement.evtPredicted ? 
                            <Tab disabled style={{backgroundColor: '#a5f2ac'}}>{eventElement.eventName}</Tab>
                        : 
                            <Tab>{eventElement.eventName}</Tab>
                    )
                })}
            </TabList>
            <TabPanel>
                <div className="container int-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <Qualifying />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container int-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <Shootout />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container int-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <SprintRace />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container int-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <Race />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container int-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <Fastestlap />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5">
                            <PilotOfTheDay />
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default NewForecast