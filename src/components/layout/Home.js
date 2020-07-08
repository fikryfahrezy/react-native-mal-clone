import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animes from '../animes/Animes';
import Search from './Search';

const Home = (props) => {
  return (
    <View>
      <Search />
      <Animes {...props} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
