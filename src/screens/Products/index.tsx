import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Header} from '~/components';
import Page from '~/layouts/Page';
import {handleFetchProducts} from '~/store/actions/products';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import {Container, ListHeader, ListHeaderText, ProductsList} from './styles';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const {products, hasError, errorMessage, updatedAt, loading} = useAppSelector(
    state => state.products,
  );

  const hideBottomAnim = useRef(new Animated.Value(0)).current;

  const [currentPosition, setCurrentPosition] = useState(0);
  const [lastDiff, setLastDiff] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  const handleFetchProductsPress = useCallback(() => {
    dispatch(handleFetchProducts());
  }, []);

  const handleScroll = useCallback(
    event => {
      const {y} = event.nativeEvent.contentOffset;

      setCurrentPosition(y);
      setLastDiff(y - currentPosition);
      if (y <= 0) {
        return setDirection('up');
      }

      if (lastDiff < 0 && y - currentPosition < 0) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    },
    [lastDiff, currentPosition],
  );

  useEffect(() => {
    if (direction === 'down') {
      Animated.timing(hideBottomAnim, {
        toValue: 120,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(hideBottomAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [direction, hideBottomAnim]);

  const renderItem = useCallback(item => {
    return <ProductCard product={item} />;
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Page>
      <Header title="Produtos" />
      <Container>
        <ProductsList
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          data={products}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderItem}
          ListHeaderComponent={
            <ListHeader>
              <ListHeaderText>
                {hasError
                  ? `${errorMessage}`
                  : !!updatedAt && `Atualizado em ${updatedAt}`}
              </ListHeaderText>
            </ListHeader>
          }
          contentContainerStyle={{justifyContent: 'space-between'}}
        />
      </Container>
      <Footer
        handlePress={handleFetchProductsPress}
        hideBottomAnim={hideBottomAnim}
      />
    </Page>
  );
};

export default Products;
