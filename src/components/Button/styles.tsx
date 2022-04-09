import styled from 'styled-components/native';

export const Pressable = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secondary};
  opacity: ${({disabled}) => (disabled ? 0.3 : 1)};
  width: 100%;
  padding: 14px;

  border-radius: 8px;
`;

export const Label = styled.Text`
  text-align: center;
  color: white;

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  background-color: ${({theme}) => theme.colors.secondary};
`;
