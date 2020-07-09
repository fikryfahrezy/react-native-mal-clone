import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../layout/Home';
import Anime from '../animes/Anime';

const stack = createStackNavigator();

const HomeStack = () => {
  const { Navigator, Screen } = stack;
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Detail"
        component={Anime}
        options={(props) => ({
          title: props.route.params.params.title,
          headerTransparent: true,
          headerTintColor: '#FFFFFF',
        })}
      />
    </Navigator>
  );
};

export default HomeStack;
