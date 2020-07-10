import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import About from '../layout/About';
import IconOcti from 'react-native-vector-icons/Octicons';

const drawer = createDrawerNavigator();

function CustomDrawerContent(props, logout) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        icon={() => <IconOcti name="sign-out" color="#DF001B" size={20} />}
        inactiveTintColor="#DF001B"
        style={{
          borderWidth: 3,
          borderColor: '#DF001B',
          backgroundColor: 'transparent',
        }}
        onPress={() => logout()}
      />
    </DrawerContentScrollView>
  );
}

const DrawerStack = (props) => {
  const {
    auth,
    logout,
    navigation: { replace },
  } = props;
  const { Navigator, Screen } = drawer;

  useEffect(() => {
    console.log(props);
    if (auth.token === null) {
      replace('Auth');
    }
  }, [auth]);

  return (
    <Navigator
      drawerStyle={{ backgroundColor: '#16131A' }}
      drawerContentOptions={{
        activeBackgroundColor: '#472B69',
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#FFFFFF',
      }}
      drawerContent={(props) => CustomDrawerContent(props, logout)}
    >
      <Screen name="Home" component={HomeStack} />
      <Screen name="About" component={About} />
    </Navigator>
  );
};

DrawerStack.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(DrawerStack);
