import React from 'react';
import {Button} from '~/components';
import {useAppSelector} from '~/store/hooks';
import {FooterProps} from '../../types';
import {Container} from './styles';

const Footer: React.FC<FooterProps> = ({hideBottomAnim, handlePress}) => {
  const {loading} = useAppSelector(state => state.products);

  return (
    <Container style={{transform: [{translateY: hideBottomAnim}]}}>
      <Button loading={loading} label="BUSCAR PRODUTOS" onPress={handlePress} />
    </Container>
  );
};

export default Footer;
