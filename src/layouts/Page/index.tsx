import React from 'react';

import {Container} from './styles';

const Page: React.FC = ({children}) => {
  return <Container>{children}</Container>;
};

export default Page;
