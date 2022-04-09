import React from 'react';
import Page from '~/layouts/Page';

import {FormContainer, LoginContainer, Logo} from './styles';
import {Input} from '~/components';
import {useState} from 'react';
import {Keyboard} from 'react-native';
import Button from '~/components/Button';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import {handleLogIn} from '~/store/actions/profile';
import {IMAGES} from '~/assets';
import SplashScreen from 'react-native-splash-screen';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.profile);

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [userNameMessage, setUserNameMessage] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordMessage, setPasswordMessage] = useState<string>('');

  const handleLoginPress = useCallback(() => {
    if (userName.length < 6) {
      setUserNameError(true);
      setUserNameMessage('Nome de usuário inválido');
      return;
    }

    if (password.length < 6) {
      setPasswordError(true);
      setPasswordMessage('Senha Inválida');
      return;
    }

    dispatch(handleLogIn({usuario: userName, senha: password}));
  }, [password, userName]);

  useEffect(() => {
    if (userName || password) {
      setUserNameError(false);
      setPasswordError(false);
    }
  }, [userName, password]);

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Page>
      <LoginContainer behavior="height" onTouchStart={() => Keyboard.dismiss()}>
        <Logo source={IMAGES.login.logo} />
        <FormContainer>
          <Input
            label="Usuário"
            placeholder="Insira seu nome de usuário"
            value={userName}
            onValueChange={setUserName}
            message={userNameMessage}
            showMessage={userNameError}
            messageType={'error'}
          />
          <Input
            label="Senha"
            placeholder="Insira sua senha"
            value={password}
            onValueChange={setPassword}
            type="password"
            message={passwordMessage}
            showMessage={passwordError}
            messageType={'error'}
          />
        </FormContainer>
        <Button loading={loading} label="ACESSAR" onPress={handleLoginPress} />
      </LoginContainer>
    </Page>
  );
};

export default Login;
