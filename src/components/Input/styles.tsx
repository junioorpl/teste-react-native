import styled from 'styled-components/native';

import {MessageProps, TextInputProps} from './types';

export const Container = styled.View`
  flex-grow: 1;
  width: 100%;
`;
export const Label = styled.Text`
  color: white;
  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;
export const Message = styled.Text<MessageProps>`
  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 14px;

  color: ${({type, theme}) => theme.messageColors[type || 'success']};
`;
export const TextInput = styled.TextInput<TextInputProps>`
  background-color: ${({theme}) => theme.colors.bgWhite};
  padding: 16px;
  border-radius: 8px;
  margin: 4px 0;
  font-size: 18px;

  font-family: 'Raleway';
  font-weight: 500;

  border-width: ${({hasMessage}) => (hasMessage ? 2 : 0)}px;
  border-color: ${({theme, messageType}) =>
    theme.messageColors[messageType || 'success']};
`;
