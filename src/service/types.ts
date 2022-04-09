import {ProductProps} from '~/store/types';

export interface LoginDataProps {
  usuario: string;
  senha: string;
}

export interface LoginResponseProps {
  response: {
    status: string;
    messages: {[key: string]: string}[];
    token: string;
    tokenExpiration: string;
  };
}

export interface LogoutResponse {
  response: {
    status: string;
    messages: {[key: string]: string}[];
  };
}

export interface ProductsResponse {
  response: {
    status: string;
    messages: {[key: string]: string}[];
    produtos: ProductProps[];
  };
}
