import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Label, Pressable} from './styles';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled = false,
  loading,
}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      {loading ? <ActivityIndicator color="white" /> : <Label>{label}</Label>}
    </Pressable>
  );
};

export default Button;
