import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {TextProps} from './types';

export const Container = styled.View`
  flex-direction: row;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px 8px;
  padding-bottom: ${Platform.OS === 'ios' ? 24 : 16}px;
  background-color: ${({theme}) => theme.colors.secondary};
  margin-top: -16px;
`;

export const TabButton = styled.Pressable`
  flex: 1;
  align-items: center;
`;

export const Icon = styled.Image`
  height: 32px;
  width: 32px;
`;

export const Text = styled.Text<TextProps>`
  color: ${({isFocused, theme}) =>
    isFocused ? 'white' : theme.colors.primary};

  font-family: ${({isFocused}) => (isFocused ? 'Raleway-Bold' : 'Raleway')};
  font-weight: ${({isFocused}) => (isFocused ? 800 : 500)};
  font-size: 14px;
`;
