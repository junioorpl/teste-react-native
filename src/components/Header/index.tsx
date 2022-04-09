import React from 'react';

import {Container, Title} from './styles';
import {HeaderProps} from './types';

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
