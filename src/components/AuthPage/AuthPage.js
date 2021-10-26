import React from 'react';
import './AuthPage.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function AuthPage() {
  return (
    <main className="auth-page">
      <div className="auth-page__overlay">
        <PopupWithForm />
      </div>
    </main>
  )
}

export default AuthPage;
