import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const About = (props) => {
  const {
    navigation: { toggleDrawer },
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer}>
          <IconIon name="ios-menu" size={40} color="#42394C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.subTitle}>
          <Text style={styles.subTitleList}>App Name: </Text>
          AnimeFinder
        </Text>
        <Text style={styles.subTitle}>
          <Text style={styles.subTitleList}>Version: </Text>
          v1.0.0
        </Text>
        <Text style={styles.subTitle}>
          <Text style={styles.subTitleList}>Author: </Text>
          Fikry Fahrezy Ramadhan
        </Text>
        <Text style={styles.subTitle}>
          <Text style={styles.subTitleList}>License: </Text>-
        </Text>
        <Text style={styles.subTitle}>
          <Text style={styles.subTitleList}>Icons: </Text>
          FontAwesome, Ionicons, MaterialCommunityIcons, Octicons
        </Text>
        <Text style={styles.subTitle}>
          <Text style={styles.subTitleList}>Sakura Logo: </Text>
          flaticon.com/authors/ultimatearm
        </Text>
        <Text style={styles.subTitle}>
          <Text style={styles.subTitleList}>Anime API: </Text>
          https://jikan.moe/
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 19,
    marginLeft: 20,
  },
  main: {
    marginTop: 15,
  },
  subTitleList: {
    fontWeight: 'bold',
  },
  subTitle: {
    marginVertical: 5,
    alignItems: 'flex-end',
    fontSize: 14,
    lineHeight: 15,
    color: '#FFFFFF',
  },
});

export default About;
