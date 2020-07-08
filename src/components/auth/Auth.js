import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Auth = (props) => {
  return (
    <View>
      <Text>Auth</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({});
