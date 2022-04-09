import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Text, Container, TabButton, Icon} from './styled';
import {IMAGES} from '~/assets';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
            console.log(
              '🚀 ~ file: index.tsx ~ line 35 ~ onPress ~ route.name',
              route.name,
            );
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconPath = isFocused
          ? IMAGES.tabBar[route.name]['on']
          : IMAGES.tabBar[route.name]['off'];

        return (
          <TabButton
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon source={iconPath} />
            <Text isFocused={isFocused}>{label}</Text>
          </TabButton>
        );
      })}
    </Container>
  );
};

export default CustomTabBar;
