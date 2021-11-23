import React from 'react';
import './PopupInput.scss';

function PopupInput({
  inputTitle, inputType, inputName,
  handleInputChange, value, inputError,
  inputMinLength, inputMaxLength, inputClassName
}) {

  return (
    <div className={inputClassName}>
      <p
        className="popup-input__placeholder"
      >
        {inputTitle}
      </p>
      <input
        required
        className="popup-input__input"
        type={inputType}
        name={inputName}
        onChange={handleInputChange}
        value={value}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
      />
      <span className="popup-input__error">
        {inputError}
      </span>
    </div>
  )
}

export default PopupInput;
