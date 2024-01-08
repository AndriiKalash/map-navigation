import { createSlice } from '@reduxjs/toolkit';
import { getLSData } from '../../utils/getLSData';
import { getLSPositions } from '../../utils/getLSPositions';

const existingData = getLSData();
const existingMarkers = getLSPositions();

const initialState = {
  fullData: existingData,
  coordinates: existingMarkers,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData(state, action) {
      state.fullData = [...state.fullData, action.payload];
    },
    getVisibleData(state, action) {
      state.fullData = action.payload;
    },
    setCoordinates(state, action) {
      state.coordinates = [...state.coordinates, action.payload];
    },
  },
});

export const dataSelector = (state) => state.data;

const { reducer, actions } = dataSlice;
export const { getData, getVisibleData, setCoordinates } = actions;
export default reducer;
