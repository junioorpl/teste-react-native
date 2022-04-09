import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.bgWhite};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 120px;
  max-height: 120px;
`;
