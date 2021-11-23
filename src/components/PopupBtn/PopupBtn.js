import React from 'react';
import './PopupBtn.scss';

function PopupBtn({
  btnClassName, btnText, handleBtnClick,
  isDisabled
}) {

  return (
    <button
      type="submit"
      className={
        `${btnClassName} ${isDisabled && 'popup-btn_disabled'}`
      }
      onClick={handleBtnClick}
      disabled={isDisabled}
    >
      {btnText}
    </button>
  )
}

export default PopupBtn;
