import React from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { handleLogout } from '../../redux/actions';

function Header() {

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(handleLogout());
    localStorage.removeItem('user');
  }

  return (
    <header className="header">
      <h1 className="header__title">
        Simple Hotel Check
      </h1>
      <div>
        <button
          type="button"
          onClick={handleLogoutClick}
          className="header__logout"
        >
          Выйти
        </button>
      </div>
    </header>
  )
}

export default Header;
