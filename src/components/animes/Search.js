import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchAnimes } from '../../actions/animeActions';
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
  const [text, setText] = useState('');

  const {
    navigation: { toggleDrawer },
    searchAnimes,
  } = props;

  const onSubmit = () => {
    searchAnimes(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer}>
        <IconIon name="ios-menu" size={40} color="#42394C" />
      </TouchableOpacity>
      <TextInput
        value={text}
        style={styles.formInput}
        placeholder="Search..."
        placeholderTextColor="#919191"
        onSubmitEditing={onSubmit}
        onChangeText={(txt) => setText(txt)}
      />
      <TouchableOpacity
        onPress={toggleDrawer}
        style={styles.search}
        onPress={onSubmit}
      >
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

Search.propTypes = {
  searchAnimes: PropTypes.func.isRequired,
};

export default connect(null, { searchAnimes })(Search);
