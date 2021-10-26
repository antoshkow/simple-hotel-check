import React from 'react';
import { useLocation } from 'react-router-dom';
import './Popup.css';

function Popup({ children }) {

  const location = useLocation();

  return (
    <section
      className={
        location.pathname === '/signin' ?
          'popup popup_auth' : 'popup'
      }
    >
      {children}
    </section>
  )
}

export default Popup;
