import {AxiosInstance} from 'axios';
import {retrieveToken} from '~/utils/tokenUtils';
import {LoginDataProps, LoginResponseProps, LogoutResponse} from './types';

const authAPI = (axios: AxiosInstance) => {
  return {
    logIn: (data: LoginDataProps) =>
      axios.post<LoginResponseProps>('/v1.1/auth', JSON.stringify(data), {
        headers: {
          'Content-type': 'Application/json',
          Accept: 'Application/json',
        },
      }),
    logOut: () =>
      axios.get<LogoutResponse>('/v1.1/logout', {
        headers: {
          'Content-type': 'Application/json',
          Accept: 'Application/json',
          Token: `${retrieveToken()}`,
        },
      }),
  };
};

export default authAPI;
