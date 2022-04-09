import {AxiosInstance} from 'axios';
import {retrieveToken} from '~/utils/tokenUtils';
import {ProductsResponse} from './types';

const productAPI = (axios: AxiosInstance) => {
  return {
    fetchProducts: () =>
      axios.get<ProductsResponse>(
        'v2.0/produtounidade/listaprodutos/0/unidade/76387901000140',
        {
          headers: {
            'Content-type': 'Application/json',
            Accept: 'Application/json',
            Token: `${retrieveToken()}`,
          },
        },
      ),
  };
};

export default productAPI;
