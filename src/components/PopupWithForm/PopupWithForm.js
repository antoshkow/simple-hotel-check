import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import './PopupWithForm.scss';
import Popup from '../Popup/Popup';
import PopupInput from '../PopupInput/PopupInput';
import PopupBtn from '../PopupBtn/PopupBtn';
import useForm from '../../hooks/useForm';
import { searchHotels, getHotels, handleLogin } from '../../redux/actions';
import { formatDate, addDays } from '../../utils/helpers';

function PopupWithForm({ isReqSending }) {

  const location = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();

  const {
    values, handleChange, resetForm,
    errors, isValid
  } = useForm();

  useEffect(() => resetForm({}), [resetForm]);

  useEffect(() => {
    let date = formatDate(new Date());
    dispatch(searchHotels('Москва', date, 1));
    dispatch(getHotels('Moscow', date, formatDate(addDays(date, 1))));
  }, [])

  const handleBtnClick = (evt, email) => {
    evt.preventDefault();
    if (location.pathname === '/signin') {
      dispatch(handleLogin(values.email));
      localStorage.setItem('user', values.email);
      history.push('/');
    } else {
      const checkOut = addDays(values.date, Number(values.days));
      dispatch(searchHotels(values.location, values.date, values.days));
      dispatch(getHotels(values.location, values.date, formatDate(checkOut)));
    }
  }

  return (
    <>
      {
        location.pathname === '/signin' && (
          <Popup>
            <form
              className="form"
            >
              <h1 className="form__title">
                Simple Hotel Check
              </h1>
              <PopupInput
                inputTitle="Логин"
                inputType="email"
                inputName="email"
                handleInputChange={handleChange}
                value={values.email || ''}
                inputError={errors.email || ''}
                inputMinLength="5"
                inputMaxLength="40"
                inputClassName="popup-input"
              />
              <PopupInput
                inputTitle="Пароль"
                inputType="password"
                inputName="password"
                handleInputChange={handleChange}
                value={values.password || ''}
                inputError={errors.password || ''}
                inputMinLength="8"
                inputMaxLength="40"
                inputClassName="popup-input"
              />
              <PopupBtn
                btnClassName="popup-btn"
                btnText="Войти"
                handleBtnClick={handleBtnClick}
                isDisabled={!isValid || isReqSending}
              />
            </form>
          </Popup>
        )
      }
      {
        location.pathname === '/' && (
          <Popup>
            <form
              className="form form_main"
            >
              <PopupInput
                inputTitle="Локация"
                inputType="text"
                inputName="location"
                handleInputChange={handleChange}
                value={values.location || ''}
                inputError={errors.location || ''}
                inputMinLength="1"
                inputMaxLength="40"
                inputClassName="popup-input popup-input_main"
              />
              <PopupInput
                inputTitle="Дата заселения"
                inputType="date"
                inputName="date"
                handleInputChange={handleChange}
                value={values.date || ''}
                inputError={errors.date || ''}
                inputMinLength="10"
                inputMaxLength="40"
                inputClassName="popup-input popup-input_main"
              />
              <PopupInput
                inputTitle="Количество дней"
                inputType="number"
                inputName="days"
                handleInputChange={handleChange}
                value={values.days || ''}
                inputError={errors.days || ''}
                inputMinLength="1"
                inputMaxLength="40"
                inputClassName="popup-input popup-input_main"
              />
              <PopupBtn
                btnClassName="popup-btn popup-btn_main"
                btnText="Найти"
                handleBtnClick={handleBtnClick}
                isDisabled={!isValid || isReqSending}
              />
            </form>
          </Popup>
        )
      }
    </>
  )
}

export default PopupWithForm;
