import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '~/store/hooks';
import Login from './Login';
import Products from './Products';
import Profile from './Profile';
import CustomTabBar from '~/components/TabBar';
import InfoToast from '~/components/InfoToast';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  const {loggedIn} = useAppSelector(state => state.profile);

  return (
    <NavigationContainer>
      <InfoToast />
      {loggedIn ? (
        <Tab.Navigator
          tabBar={props => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="Produtos" component={Products} />
          <Tab.Screen name="Minha Conta" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
