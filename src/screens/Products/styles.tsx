import styled from 'styled-components/native';
import {FlatListProps} from './types';

export const Container = styled.View`
  height: 90%;
`;

export const ProductsList = styled.FlatList<FlatListProps>`
  border-radius: 8px;
`;

export const ListHeader = styled.View`
  padding: 8px;
`;

export const ListHeaderText = styled.Text`
  text-align: center;
  color: white;

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;
`;
