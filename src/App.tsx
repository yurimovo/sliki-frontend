import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import ForecastPage from './pages/forecast-page/ForecastPage';
import MainPage from './pages/main-page/MainPage';
import PersonalPage from './pages/personal-page/PersonalPage';
import Calendar from './pages/calendar-page/Calendar';

import './main-container.scss';

function App() {
  return (
    <div className="template-container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
