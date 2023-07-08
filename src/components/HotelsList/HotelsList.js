import React from 'react';
import { useSelector } from 'react-redux';
import './HotelsList.css';
import sign from '../../images/vector-h2.svg';
import Hotel from '../Hotel/Hotel';
import Preloader from '../Preloader/Preloader';
import Carousel from '../Carousel/Carousel';
import {
  formatDateWithEnMonth, formatDateWithRuMonth, declOfNum
} from '../../utils/helpers';

function HotelsList() {

  const hotelsData = useSelector(state => {
    return state.hotels.hotels;
  });

  const savedHotels = useSelector(state => {
    return state.hotels.savedHotels;
  });

  const check = useSelector(state => {
    return state.hotels.check;
  });

  const isLoading = useSelector(state => {
    return state.app.isLoading;
  })

  const dateArrive = formatDateWithEnMonth(check.in);

  const dataArriveRu = formatDateWithRuMonth(check.in);

  return (
    <section className="hotels">
      <div className="hotels__wrapper">
        <h2 className="hotels__title">
          Отели
          <img className="hotels__sign" src={sign} alt="стрелка" />
          {
            check.location
          }
        </h2>
        <p className="hotels__date">
          {dataArriveRu}
        </p>
      </div>
      <Carousel />
      <p className="hotels__capture">Добавлено в Избранное: <span className="hotels__span">{savedHotels.length}</span> {declOfNum(savedHotels.length, ['отель', 'отеля', 'отелей'])}</p>
      <ul className="hotels__list">
        {
          isLoading ?
            <Preloader /> :
            hotelsData && hotelsData.map(hotel => (
              <Hotel
                key={hotel.hotelId}
                title={hotel.hotelName}
                price={Math.floor(hotel.priceAvg)}
                arrive={dateArrive}
                days={check.out}
                stars={hotel.stars}
                id={hotel.hotelId}
                isSaved={false}
                hotelData={hotel}
              />
            ))
        }
      </ul>
    </section>
  )
}

export default HotelsList;
