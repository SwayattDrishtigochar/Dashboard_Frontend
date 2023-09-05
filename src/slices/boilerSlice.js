import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boilerData: [],
};

const boilerSlice = createSlice({
  name: 'boilerData',
  initialState,
  reducers: {
    addBoilerData: (state, action) => {
      state.boilerData = action.payload;
    },
    removeBoilerData: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((data) => data._id !== idToRemove);
    },
  },
});

export const { addBoilerData, removeBoilerData } = boilerSlice.actions;

export default boilerSlice.reducer;
