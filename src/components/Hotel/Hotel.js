import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Hotel.scss';
import { declOfNum } from '../../utils/helpers';
import {
  likeHotel, unlikeHotel, saveHotelId,
  removeSaveHotelId
} from '../../redux/actions';
import { handleIsLiked } from '../../utils/helpers';

function Hotel({
  title, arrive, days,
  price, stars, isSaved,
  id, hotelData
}) {

  const dispatch = useDispatch();

  const savedHotelsId = useSelector(state => {
    return state.hotels.savedHotelsId;
  });

  const isLiked = handleIsLiked(id, savedHotelsId);

  const handleClick = () => {
    if (!isLiked) {
      dispatch(likeHotel(hotelData));
      dispatch(saveHotelId(id));
    } else {
      dispatch(unlikeHotel(hotelData));
      dispatch(removeSaveHotelId(id));
    }
  }

  return (
    <li className="hotel">
      <div
        className={
          isSaved ? 'hotel__house' : 'hotel__house hotel__house_saved'
        }
      />
      <div
        className={
          isSaved ? 'hotel__main hotel__main_saved' : 'hotel__main'
        }
      >
        <div className="hotel__wrapper">
          <h2 className="hotel__title">
            {title}
          </h2>
          <div
            className="hotel__like"
            onClick={handleClick}
          />
        </div>
        <div className="hotel__wrapper hotel__wrapper_middle">
          <p className="hotel__date">
            {arrive}
          </p>
          <div className="hotel__dash" />
          <p className="hotel__days">
            {
              `${days} ${declOfNum(days, ['день', 'дня', 'дней'])}`
            }
          </p>
        </div>
        <div className="hotel__wrapper hotel__wrapper_bottom">
          {
            stars === 5 && (
              <ul className="hotel__stars">
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star" />
              </ul>
            )
          }
          {
            stars === 4 && (
              <ul className="hotel__stars">
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star hotel__star_inactive" />
              </ul>
            )
          }
          {
            stars === 3 && (
              <ul className="hotel__stars">
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star hotel__star_inactive" />
                <li className="hotel__star hotel__star_inactive" />
              </ul>
            )
          }
          {
            stars === 2 && (
              <ul className="hotel__stars">
                <li className="hotel__star" />
                <li className="hotel__star" />
                <li className="hotel__star hotel__star_inactive" />
                <li className="hotel__star hotel__star_inactive" />
                <li className="hotel__star hotel__star_inactive" />
              </ul>
            )
          }
          {
            stars === 1 && (
              <ul className="hotel__stars">
                <li className="hotel__star hotel__star_inactive" />
                <li className="hotel__star hotel__star_inactive" />
                <li className="hotel__star hotel__star_inactive" />
                <li className="hotel__star hotel__star_inactive" />
                <li className="hotel__star hotel__star_inactive" />
              </ul>
            )
          }
          <p className="hotel__price">
            <span className="hotel__span">
              Price:
            </span>
            {`${price.toLocaleString()} ₽`}
          </p>
        </div>
      </div>
    </li>
  )
}

export default Hotel;
