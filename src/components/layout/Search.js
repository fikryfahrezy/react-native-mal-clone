import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFa from 'react-native-vector-icons/FontAwesome';

const DEVICE = Dimensions.get('screen');

const Search = (props) => {
  const {
    navigation: { toggleDrawer },
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer}>
        <IconIon name="ios-menu" size={40} color="#42394C" />
      </TouchableOpacity>
      <TextInput
        style={styles.formInput}
        placeholder="Search..."
        placeholderTextColor="#919191"
      />
      <TouchableOpacity onPress={toggleDrawer} style={styles.search}>
        <IconFa name="search" size={20} color="#F08BBD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: DEVICE.width,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formInput: {
    backgroundColor: '#42394D',
    borderRadius: 25,
    color: '#919191',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: DEVICE.width * 0.7,
    height: DEVICE.height * 0.04,
  },
  search: {
    backgroundColor: '#42394D',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: DEVICE.height * 0.045,
    height: DEVICE.height * 0.045,
  },
});

export default Search;
