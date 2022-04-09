import {createAsyncThunk} from '@reduxjs/toolkit';
import createAPI from '~/service';
import {LoginDataProps} from '~/service/types';
import {logOut} from '../slices/profile';

export const handleLogIn = createAsyncThunk(
  'profile/logIn',
  async (data: LoginDataProps, thunkAPI): Promise<any> => {
    try {
      const {data: resData} = await createAPI().auth.logIn(data);
      if (resData.response.status === 'error') {
        throw new Error(resData.response?.messages[0].message);
      }

      return thunkAPI.fulfillWithValue({
        user: data.usuario || '',
        token: resData.response.token || '',
        expirationDate: resData.response.tokenExpiration || '',
      });
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);
      return thunkAPI.rejectWithValue(err.Error || 'Credenciais Inválidas');
    }
  },
);

export const handleLogout = createAsyncThunk(
  'profile/logOut',
  async (_, thunkAPI): Promise<any> => {
    try {
      const {data: resData} = await createAPI().auth.logOut();
      console.log('🚀 ~ file: profile.ts ~ line 10 ~ resData', resData);
      if (resData.response.status === 'error') {
        throw new Error(resData.response?.messages[0].message);
      }
      const logoutAction = logOut();
      thunkAPI.dispatch(logoutAction);
      return resData.response?.messages[0].message;
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);
      return thunkAPI.rejectWithValue(
        err.Error || 'Falha ao tentar realizar logout',
      );
    }
  },
);
