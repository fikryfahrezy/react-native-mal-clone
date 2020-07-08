import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../auth/Auth';
import DrawerStack from './DrawerStack';

const stack = createStackNavigator();

const RootStack = ({ auth: { token } }) => {
  const { Navigator, Screen } = stack;
  return (
    <Navigator headerMode="none" initialRouteName={!token ? 'Auth' : 'Home'}>
      <Screen name="Auth" component={Auth} />
      <Screen name="Home" component={DrawerStack} />
    </Navigator>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(RootStack);
