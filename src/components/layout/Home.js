import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animes from '../animes/Animes';
import Search from './Search';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Search {...props} />
      <Animes {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
    paddingTop: 22,
  },
});

export default Home;
