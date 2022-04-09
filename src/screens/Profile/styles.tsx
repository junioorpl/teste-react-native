import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90%;
  justify-content: space-between;
`;

export const PageData = styled.View``;
export const Line = styled.View`
  /* flex-direction: row; */
  justify-content: space-between;
  border-bottom-color: ${({theme}) => `${theme.colors.bgWhite}`};
  border-bottom-width: 1px;
  margin: 24px 0;
`;

export const Label = styled.Text`
  color: white;

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
`;
export const Data = styled.Text`
  color: white;

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;

export const InfoText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;
