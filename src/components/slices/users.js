import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      name: 'netaspid',
      image: 'big.png',
    },
  ],
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      const {stateNew} = action.payload;
      state = stateNew;
    },
  },
});

export const {reducer} = slice;

export const addUser = (value) => {
  (dispatch) => {
    dispatch(slice.actions.addUser(value));
  };
};

export default slice;
