import { useState } from 'react';

export const useSetData = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    position: [],
    visible: true,
  });

  const handleChangeFile = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file) {
        setFormData({
          ...formData,
          image: URL.createObjectURL(file),
        });
      }
    }
  };

  const handleChangeInput = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const setPosition = (mark) => {
    setFormData({
      ...formData,
      position: mark,
    });
  };

  const handleFormData = () => {
    const existingData = JSON.parse(localStorage.getItem('formdata')) || [];
    const newData = [...existingData, formData];
    localStorage.setItem('formdata', JSON.stringify(newData));

    setFormData({
      title: '',
      description: '',
      image: '',
      position: [],
    });
  };

  return {
    formData,
    setFormData,
    handleChangeFile,
    handleChangeInput,
    handleFormData,
    setPosition,
  };
};
