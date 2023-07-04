import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { injectStores } from '@mobx-devtools/tools';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/main-page/MainPage';
import PersonalPage from './pages/personal-page/PersonalPage';
import Calendar from './pages/calendar-page/Calendar';
import NewForecast from './pages/new-forecast/NewForecast';

import './main-container.scss';
import forecastStore from './store/pilots';

/* const store = new forecastStore()

injectStores({
  store
}) */

function App() {
  return (
    <div className="template-container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path='/new_forecast' element={<NewForecast />} />
      </Routes>
    </div>
  );
}

export default App;
