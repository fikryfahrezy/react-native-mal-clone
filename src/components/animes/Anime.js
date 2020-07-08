import React from 'react';
import { View, Text } from 'react-native';

const Anime = (props) => {
  const {
    route: {
      params: { params },
    },
  } = props;

  return (
    <View>
      <Text>Anime</Text>
      <Text>{params.id}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default Anime;
