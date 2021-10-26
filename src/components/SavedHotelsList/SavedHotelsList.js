import React from 'react';
import { useSelector } from 'react-redux';
import './SavedHotelsList.css';
import Popup from '../Popup/Popup';
import Filter from '../Filter/Filter';
import Hotel from '../Hotel/Hotel';
import {
  formatDateWithEnMonth, sortRatingFilterUp, sortCostFilterDown,
  sortCostFilterUp, sortRatingFilterDown
} from '../../utils/helpers';

function SavedHotelsList() {

  const savedHotels = useSelector(state => {
    return state.hotels.savedHotels;
  });

  const check = useSelector(state => {
    return state.hotels.check;
  });

  const ratingFilter = useSelector(state => {
    return state.filter.isRatingOn;
  });

  const costFilter = useSelector(state => {
    return state.filter.isCostOn;
  });

  const dateArrive = formatDateWithEnMonth(check.in);

  const savedHotelsByRatingDown = sortRatingFilterDown(savedHotels)
  const savedHotelsByCostUp = sortCostFilterUp(savedHotels)
  const savedHotelsByCostDown = sortCostFilterDown(savedHotels)
  const savedHotelsByRatingUp = sortRatingFilterUp(savedHotels)

  return (
    <Popup>
      <div className="saved-hotels">
        <h2 className="saved-hotels__title">
          Избранное
        </h2>
        <ul className="saved-hotels__filter">
          <Filter
            title="Рейтинг"
            type={ratingFilter}
          />
          <Filter
            title="Цена"
            type={costFilter}
          />
        </ul>
        <ul className="saved-hotels__list">
          {
            ratingFilter === true && (
              savedHotelsByRatingUp.map(hotel => (
                <Hotel
                  key={hotel.hotelId}
                  title={hotel.hotelName}
                  price={Math.floor(hotel.priceAvg)}
                  arrive={dateArrive}
                  days={check.out}
                  stars={hotel.stars}
                  id={hotel.hotelId}
                  isSaved={true}
                  hotelData={hotel}
                />
              ))
            )
          }
          {
            ratingFilter === false && (
              savedHotelsByRatingDown.map(hotel => (
                <Hotel
                  key={hotel.hotelId}
                  title={hotel.hotelName}
                  price={Math.floor(hotel.priceAvg)}
                  arrive={dateArrive}
                  days={check.out}
                  stars={hotel.stars}
                  id={hotel.hotelId}
                  isSaved={true}
                  hotelData={hotel}
                />
              ))
            )
          }
          {
            costFilter === true && (
              savedHotelsByCostUp.map(hotel => (
                <Hotel
                  key={hotel.hotelId}
                  title={hotel.hotelName}
                  price={Math.floor(hotel.priceAvg)}
                  arrive={dateArrive}
                  days={check.out}
                  stars={hotel.stars}
                  id={hotel.hotelId}
                  isSaved={true}
                  hotelData={hotel}
                />
              ))
            )
          }
          {
            costFilter === false && (
              savedHotelsByCostDown.map(hotel => (
                <Hotel
                  key={hotel.hotelId}
                  title={hotel.hotelName}
                  price={Math.floor(hotel.priceAvg)}
                  arrive={dateArrive}
                  days={check.out}
                  stars={hotel.stars}
                  id={hotel.hotelId}
                  isSaved={true}
                  hotelData={hotel}
                />
              ))
            )
          }
        </ul>
      </div>
    </Popup>
  )
}

export default SavedHotelsList;
