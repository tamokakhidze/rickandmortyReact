import { useState } from 'react';

const useForm = (callback, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
