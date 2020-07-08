import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Animes = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Animesss</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.push('Detail', {
            params: {
              id: '1',
              title: 'Anime Title',
            },
          })
        }
      >
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animes;

const styles = StyleSheet.create({});
