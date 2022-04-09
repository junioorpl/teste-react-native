import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Toast from '~/layouts/Toast';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import {resetError as resetErrorProducts} from '~/store/slices/products';
import {resetError as resetErrorProfile} from '~/store/slices/profile';
import {TITLE} from './labels';
import {Container, Content, Description, Title} from './styles';
import {ToastNotificationProps} from './types';

const TIMER = 4000;

const InfoToast: React.FC = () => {
  const dispatch = useAppDispatch();

  const [hasError, setHasError] = useState(false);
  const [intervalId, setIntervalId] = useState<any[]>([]);
  const [errArr, setErrArr] = useState<ToastNotificationProps[]>([]);

  const {products, profile} = useAppSelector(state => state);

  const errorHandler = useCallback((pr, pf) => {
    let aux: ToastNotificationProps;
    if (pr.hasError) {
      aux = {
        description: `${pr.errorMessage || 'Algo deu errado!'} `,
        title: TITLE['error']['Product'],
        infoType: 'error',
      };
      dispatch(resetErrorProducts());
      setErrArr(arr => [...arr, aux]);
    }
    if (pf.hasError) {
      const type = pf.loggedIn ? 'Profile' : 'Login';
      aux = {
        description: `${pf.errorMessage || 'Algo deu errado!'} `,
        title: TITLE['error'][type],
        infoType: 'error',
      };

      dispatch(resetErrorProfile());
      setErrArr(arr => [...arr, aux]);
    }
  }, []);

  useEffect(() => {
    if (products.hasError || profile.hasError) errorHandler(products, profile);
  }, [errorHandler, products, profile]);

  useEffect(() => {
    if (errArr.length > 0) {
      const interval = setInterval(() => {
        const newArr = [...errArr];
        newArr.splice(0, 1);
        setErrArr(newArr);
      }, TIMER);
      setIntervalId((intervalArr: any) => [...intervalArr, interval]);
      setHasError(true);
    }
  }, [errArr]);

  useEffect(() => {
    if (intervalId.length > 0 && errArr.length === 0) {
      setHasError(false);
      intervalId.map((el: any) => clearInterval(el));
    }
  }, [errArr, intervalId]);

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 76 ~ errArr', errArr);
    console.log('🚀 ~ file: index.tsx ~ line 76 ~ hasError', hasError);
  }, [errArr, hasError]);

  const renderCurrentNotification = useCallback(() => {
    return (
      <Content>
        <Title>{errArr[0]?.title || ''}</Title>
        <Description>{errArr[0]?.description || ''}</Description>
      </Content>
    );
  }, [errArr]);

  return (
    <Toast show={hasError}>
      <Container>{renderCurrentNotification()}</Container>
    </Toast>
  );
};

export default InfoToast;
