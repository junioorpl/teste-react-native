import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  position: relative;
  bottom: 0;
`;
export const Content = styled.View`
  padding: 8px 12px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 16px;
`;
export const Description = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 16px;
`;
