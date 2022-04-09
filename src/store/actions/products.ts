import {createAsyncThunk} from '@reduxjs/toolkit';
import createAPI from '~/service';
import {logOut} from '../slices/profile';

export const handleFetchProducts = createAsyncThunk(
  'products/fetch',
  async (_, thunkAPI): Promise<any> => {
    try {
      const {data: resData} = await createAPI().products.fetchProducts();
      if (resData.response.status !== 'ok') {
        throw new Error(resData.response?.messages[0].message);
      }

      const formattedProductArr = resData.response.produtos.map(
        ({Codigo, CodigoBarras, Descricao, Preco}) => ({
          Codigo,
          Descricao,
          CodigoBarras,
          Preco,
        }),
      );

      return thunkAPI.fulfillWithValue({products: formattedProductArr});
    } catch (err: any) {
      console.log('🚀 ~ file: profile.ts ~ line 12 ~ err', err);

      const logoutAction = logOut();
      thunkAPI.dispatch(logoutAction);
      return thunkAPI.rejectWithValue(err.Error || 'Credenciais Inválidas');
    }
  },
);
