import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import About from '../layout/About';

const drawer = createDrawerNavigator();

const DrawerStack = () => {
  const { Navigator, Screen } = drawer;
  return (
    <Navigator>
      <Screen name="Home" component={HomeStack} />
      <Screen name="About" component={About} />
    </Navigator>
  );
};

export default DrawerStack;
