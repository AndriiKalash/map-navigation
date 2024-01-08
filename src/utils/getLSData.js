export const getLSData = () =>
  JSON.parse(localStorage.getItem('formdata')) || [];
