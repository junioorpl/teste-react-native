import moment from 'moment';
import React, {useCallback, useState} from 'react';
import {Button, Header} from '~/components';
import Page from '~/layouts/Page';
import {handleLogout} from '~/store/actions/profile';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import {Container, Data, InfoText, Label, Line, PageData} from './styles';

const PRIVATE_TOKEN = '************************************';
const PRIVATE_DATE = 'HH:MM DD/MM/YYYY';

const Profile: React.FC = () => {
  const {user, token, expirationDate, loading} = useAppSelector(
    state => state.profile,
  );
  const dispatch = useAppDispatch();

  const [showToken, setShowToken] = useState<boolean>(false);
  const [showDate, setShowDate] = useState<boolean>(false);

  const handleLogoutPress = useCallback(() => {
    dispatch(handleLogout());
  }, [dispatch]);

  return (
    <Page>
      <Header title="Minha Conta" />
      <Container>
        <PageData>
          <Line>
            <Label>Usuário</Label>
            <Data>{user || ''}</Data>
          </Line>
          <Line onTouchStart={() => setShowToken(!showToken)}>
            <Label>Token</Label>
            <Data>{showToken ? token : PRIVATE_TOKEN}</Data>
          </Line>
          <Line onTouchStart={() => setShowDate(!showDate)}>
            <Label>Data de expiração do token</Label>
            <Data>
              {showDate
                ? moment(expirationDate).format(PRIVATE_DATE)
                : PRIVATE_DATE}
            </Data>
          </Line>

          <InfoText>Pressione para revelar/ocultar dados</InfoText>
        </PageData>

        <Button loading={loading} label="LOGOUT" onPress={handleLogoutPress} />
      </Container>
    </Page>
  );
};

export default Profile;
