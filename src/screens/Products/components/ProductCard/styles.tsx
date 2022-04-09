import styled from 'styled-components/native';
import DrawBarcode from 'react-native-barcode-builder';
import {FieldProps} from '../../types';
import {Animated} from 'react-native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.bgWhite};
  width: 100%;
  margin-bottom: 8px;
  border-radius: 8px;
  padding: 12px 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Content = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;
export const Field = styled.View<FieldProps>`
  align-items: ${({align = 'flex-start'}) => `${align}`};
`;
export const ShowMore = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

export const Icon = styled.Image`
  height: 18px;
  width: 18px;
  margin-left: 4px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.primary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;
export const ShowMoreText = styled.Text`
  color: ${({theme}) => theme.colors.primary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 16px;
`;

export const ProductCode = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;
export const Price = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;
export const Description = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;
export const Barcode = styled(DrawBarcode)`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
  text-align: center;
`;
export const BarcodeText = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;
