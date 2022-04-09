import store from '~/store';

export const retrieveToken = (): string => {
  const {token, loggedIn} = store.getState().profile;
  if (!loggedIn) {
    return '';
  }
  console.log(
    '🚀 ~ file: tokenUtils.ts ~ line 5 ~ retrieveToken ~ token',
    token,
  );
  return `${token}`;
};
