export const getLSPositions = () => {
  const existingData = JSON.parse(localStorage.getItem('formdata')) || [];
  if (existingData) {
    const existingMarkers = existingData.map((obj) => obj.position);
    return existingMarkers;
  } else {
    return [];
  }
};
