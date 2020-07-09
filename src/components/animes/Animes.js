import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { searchAnimes, getAnime } from '../../actions/animeActions';
import axios from 'axios';

const DEVICE = Dimensions.get('screen');

const Card = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://cdn.myanimelist.net/images/anime/10/68209.jpg',
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle} numberOfLines={2}>
        Animessssdfsafsafsafasfassdfasfasfasfasfsadfsafasfasfas
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.push('Detail', {
            params: {
              id: '28205',
              title: 'Anime Title',
            },
          })
        }
        style={styles.detailButton}
      >
        <Text style={styles.detailText}>DETAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

const Animes = (props) => {
  // const { navigation } = props;

  // useEffect(() => {
  // props.searchAnimes('naruto');
  // props.getAnime('28205');
  // }, []);

  return (
    <View>
      <StatusBar style="inverted" />
      <Card {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#42394C',
    width: DEVICE.width * 0.45,
    height: DEVICE.height * 0.45,
    borderRadius: 5,
    alignItems: 'center',
  },
  cardImage: {
    resizeMode: 'contain',
    width: DEVICE.width * 0.4,
    height: DEVICE.height * 0.3,
    marginVertical: 10,
  },
  cardTitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 13,
    textAlign: 'left',
    color: '#FFFFFF',
    width: DEVICE.width * 0.4,
    marginLeft: 0,
    marginVertical: 5,
  },
  detailButton: {
    backgroundColor: '#F08BBD',
    borderRadius: 5,
    width: DEVICE.width * 0.4,
    marginTop: 5,
  },
  detailText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 3,
  },
});

Animes.propTypes = {
  anime: PropTypes.object,
  searchAnimes: PropTypes.func.isRequired,
  getAnime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
});

export default connect(mapStateToProps, { searchAnimes, getAnime })(Animes);
