import React from 'react';
import './MainPage.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import SavedHotelsList from '../SavedHotelsList/SavedHotelsList';
import HotelsList from '../HotelsList/HotelsList';

function MainPage() {
  return (
    <main className="main-page">
      <div className="main-page__popup">
        <PopupWithForm
        />
      </div>
      <div className="main-page__saved">
        <SavedHotelsList />
      </div>
      <div className="main-page__hotels">
        <HotelsList />
      </div>
    </main>
  )
}

export default MainPage;
