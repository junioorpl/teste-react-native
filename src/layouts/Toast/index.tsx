import React, {Children, useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {ToastProps} from '../types';

import {Container} from './styles';

const Toast: React.FC<ToastProps> = ({children, show}) => {
  const hideTopAnim = useRef(new Animated.Value(0.01)).current;

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 12 ~ useEffect ~ show', show);
    if (show) {
      Animated.timing(hideTopAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(hideTopAnim, {
        toValue: -1000,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  }, [hideTopAnim, show]);

  return (
    <Container style={{transform: [{translateY: hideTopAnim}]}}>
      {children}
    </Container>
  );
};

export default Toast;
