import React from 'react';

import {Container, Label, Message, TextInput} from './styles';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  label,
  type,
  message,
  messageType,
  showMessage,
  placeholder,
  value,
  onValueChange,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        hasMessage={showMessage}
        messageType={messageType}
        placeholder={placeholder}
        value={value}
        textContentType={type}
        onChangeText={onValueChange}
        secureTextEntry={type === 'password'}
      />
      <Message type={messageType}>{showMessage ? message : ''}</Message>
    </Container>
  );
};

export default Input;
