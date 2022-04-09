import axios from 'axios';
import store from '~/store';
import {logOut} from '~/store/slices/profile';
import authAPI from './auth';
import productAPI from './product';

const createAPI = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://servicosflex.rpinfo.com.br:9000/',
    proxy: {
      protocol: 'http',
      host: 'servicosflex.rpinfo.com.br',
      port: 9000,
    },
  });

  axiosInstance.interceptors.response.use(response => {
    console.log(
      '🚀 ~ file: index.ts ~ line 12 ~ createAPI ~ response',
      response.status,
    );

    if (response.status === 0) {
      store.dispatch(logOut());
    }

    return response;
  });

  return {
    auth: authAPI(axiosInstance),
    products: productAPI(axiosInstance),
  };
};

export default createAPI;
