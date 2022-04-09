export interface ErrorPayloadProps {
  errorMessage: string;
}
export interface FullfillProps {
  user: string;
  token: string;
  expirationDate: string;
}
export interface RejectedProps {
  errorMessage: string;
}

export interface ErrorPayloadProps {
  errorMessage: string;
}

export interface LogInPayload {
  token: string;
  user: string;
  expirationDate: string;
}

export interface ProfileState {
  loading: boolean;
  hasError: boolean;
  loggedIn: boolean;
  errorMessage: string | unknown;
  user: string;
  token: string;
  expirationDate: string;
}

export interface ProductProps {
  Codigo: number;
  Descricao: string;
  Preco: number;
  CodigoBarras: number;
}

export interface ProductsState {
  products: ProductProps[];
  loading: boolean;
  hasError: boolean;
  updatedAt: string;
  errorMessage: string | unknown;
}
