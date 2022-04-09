import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';
import {handleFetchProducts} from '../actions/products';

import {ProductsState} from '../types';

const initialState: ProductsState = {
  products: [],
  loading: false,
  updatedAt: '',
  hasError: false,
  errorMessage: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetError: state => {
      state.hasError = false;
      state.errorMessage = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(handleFetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.hasError = false;
      state.updatedAt = moment().format('HH:MM DD/MM/YYYY');
      state.loading = false;
    });
    builder.addCase(handleFetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(handleFetchProducts.pending, state => {
      state.loading = true;
    });
  },
});

export const {resetError} = productsSlice.actions;

export default productsSlice.reducer;
