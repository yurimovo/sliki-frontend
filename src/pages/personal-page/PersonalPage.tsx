import React from 'react';

import './style.scss';

import PersonalForecasts from '../../components/personal/PersonalForecasts';

const PersonalPage = () => {
  return (
    <div className='container' style={{ marginTop: '20px' }}>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <PersonalForecasts />
        </div>
      </div>
    </div>
  )
};

export default PersonalPage;
