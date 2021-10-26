import { useState, useCallback } from 'react';
import { cyrillicPattern, cyrillicErrorMsg } from '../constants/config'

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = evt => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    setValues({
      ...values,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: input.validationMessage
    });

    if (cyrillicPattern.test(values.password)) {
      setErrors({
        ...errors,
        password: cyrillicErrorMsg
      });
    }

    if (cyrillicPattern.test(values.location)) {
      setErrors({
        ...errors,
        location: cyrillicErrorMsg
      });
    }

    setIsValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, resetForm, errors, isValid };
}

export default useForm;
