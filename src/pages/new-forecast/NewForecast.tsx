import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import "./style.scss"

import Qualifying from "../../components/forecast-pagination/qualifying/Qualifying";
import Race from "../../components/forecast-pagination/race/Race";
import Fastestlap from "../../components/cards/fastest-lap/Fastestlap";
import SprintQualifying from "../../components/forecast-pagination/sprint-qualifying/SprintQualifying";
import SprintRace from "../../components/forecast-pagination/sprint-race/SprintRace";
import PilotOfTheDay from "../../components/cards/pilot-of-the-day/PilotOfTheDay";

const NewForecast = () => {
    return (
        <Tabs className="container tabs-container">
            <TabList>
                <Tab>Спринт-квалификация</Tab>
                <Tab>Квалификация</Tab>
                <Tab>Спринт</Tab>
                <Tab>Гонка</Tab>
                <Tab>Лучший круг</Tab>
                <Tab>Пилот дня</Tab>
            </TabList>
            <TabPanel>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SprintQualifying />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Qualifying />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SprintRace />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Race />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Fastestlap />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <PilotOfTheDay />
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default NewForecast