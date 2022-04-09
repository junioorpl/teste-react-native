import {createSlice} from '@reduxjs/toolkit';
import {handleLogIn, handleLogout} from '../actions/profile';
import {ProfileState} from '../types';

const initialState: ProfileState = {
  loading: false,
  loggedIn: false,
  hasError: false,
  errorMessage: '',
  user: '',
  token: '',
  expirationDate: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetError: state => {
      state.hasError = false;
      state.errorMessage = '';
    },
    logOut: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.expirationDate = initialState.expirationDate;
      state.loading = false;
      state.loggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(handleLogIn.fulfilled, (state, action) => {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.expirationDate = action.payload?.expirationDate;

      state.loggedIn = true;
      state.loading = false;
    });
    builder.addCase(handleLogIn.rejected, (state, action) => {
      state.hasError = true;
      state.errorMessage = action.payload;

      state.loading = false;
    });
    builder.addCase(handleLogIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(handleLogout.rejected, (state, action) => {
      state.hasError = true;
      state.errorMessage = action.payload;

      state.loggedIn = false;
      state.loading = false;
    });
    builder.addCase(handleLogout.pending, state => {
      state.loading = true;
    });
  },
});

export const {logOut, resetError} = profileSlice.actions;

export default profileSlice.reducer;
