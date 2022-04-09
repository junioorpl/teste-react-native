import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {IMAGES} from '~/assets';
import {brazilianReal} from '~/utils/currencyUtils';
import {ProductCardProps} from '../../types';
import {
  Barcode,
  BarcodeText,
  Container,
  Content,
  Description,
  Field,
  Header,
  Icon,
  Label,
  Price,
  ProductCode,
  ShowMore,
  ShowMoreText,
} from './styles';

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const [expanded, setExpanded] = useState(false);
  const {Codigo, CodigoBarras, Descricao, Preco} = product.item;

  const moreInfoOpacity = useRef(new Animated.Value(0)).current;

  const handleShowMorePress = useCallback(() => {
    const timer = expanded ? 300 : 0;
    if (expanded) {
      Animated.timing(moreInfoOpacity, {
        toValue: 0,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
    setTimeout(() => setExpanded(!expanded), timer);
  }, [moreInfoOpacity, expanded]);

  useEffect(() => {
    if (expanded) {
      Animated.timing(moreInfoOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  }, [expanded]);

  return (
    <Container>
      <Header>
        <Field>
          <Label>Descrição</Label>
          <Description>{Descricao}</Description>
        </Field>
        <Field>
          <Label>Preço</Label>
          <Price>{brazilianReal(Preco)}</Price>
        </Field>
      </Header>
      {expanded && (
        <Content
          style={{
            opacity: moreInfoOpacity,
          }}>
          <Field>
            <Label>Código</Label>
            <ProductCode>{Codigo}</ProductCode>
          </Field>
          <Field align="center">
            <Barcode format="CODE128" value={`${CodigoBarras}`} height={48} />
            <BarcodeText>{CodigoBarras}</BarcodeText>
          </Field>
        </Content>
      )}
      <ShowMore onPress={handleShowMorePress}>
        <ShowMoreText>
          {expanded ? 'Mostrar menos' : 'Mostrar Mais'}
        </ShowMoreText>
        <Icon
          source={IMAGES.icons.arrowDown}
          style={{
            transform: [
              {
                rotate: expanded ? '180deg' : '0deg',
              },
            ],
          }}
        />
      </ShowMore>
    </Container>
  );
};

export default ProductCard;
