import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  costFilterOff, costFilterOn, ratingFilterOff,
  ratingFilterOn
} from '../../redux/actions';
import './Filter.scss';

function Filter({ title, type }) {

  const dispatch = useDispatch();

  const filterData = useSelector(state => {
    return state.filter;
  })

  const handleClick = () => {
    if (filterData.isRatingOn === false && type === false) {
      dispatch(ratingFilterOn());
    } else if (filterData.isCostOn === false && type === false) {
      dispatch(costFilterOn());
    } else if (filterData.isRatingOn === true && type === true) {
      dispatch(ratingFilterOff());
    } else if (filterData.isCostOn === true && type === true) {
      dispatch(costFilterOff());
    } else if (filterData.isRatingOn === true && type === null) {
      dispatch(costFilterOn());
    } else if (filterData.isRatingOn === false && type === null) {
      dispatch(costFilterOn());
    } else if (filterData.isCostOn === true && type === null) {
      dispatch(ratingFilterOn());
    } else if (filterData.isCostOn === false && type === null) {
      dispatch(ratingFilterOn());
    }
  }

  return (
    <li className="filter">
      <button
        className={
          type === null ?
            'filter__btn filter__btn_disabled' : 'filter__btn'
        }
        type="button"
        onClick={handleClick}
      >
        {title}
        <ul className="filter__arrows">
          <li
            className={
              type === true ?
                'filter__arrow' : 'filter__arrow filter__arrow_inactive'
            }
          />
          <li
            className={
              type === false ?
                'filter__arrow filter__arrow_down' : 'filter__arrow filter__arrow_down filter__arrow_inactive'
            }
            />
        </ul>
      </button>
    </li>
  )
}

export default Filter;
