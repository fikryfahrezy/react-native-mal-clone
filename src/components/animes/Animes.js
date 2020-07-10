import React from 'react';
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
import IconFa from 'react-native-vector-icons/FontAwesome';

const DEVICE = Dimensions.get('screen');

const Animes = (props) => {
  const {
    anime: { animes },
    navigation,
  } = props;

  return (
    <View>
      <StatusBar style="inverted" />
      {animes === null || animes.length === 0 ? (
        <View style={styles.loadingComponent}>
          <IconFa name="search" size={200} color="#332C3C" />
          <Text style={styles.loadingText}>Find your Anime ...</Text>
        </View>
      ) : (
        <FlatList
          data={animes}
          keyExtractor={(data) => data.mal_id.toString()}
          numColumns={2}
          renderItem={(anime) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri: `${anime.item.image_url}`,
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle} numberOfLines={2}>
                {anime.item.title}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('Detail', {
                    params: {
                      id: `${anime.item.mal_id}`,
                      title: `${anime.item.title}`,
                    },
                  })
                }
                style={styles.detailButton}
              >
                <Text style={styles.detailText}>DETAIL</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#42394C',
    width: DEVICE.width * 0.45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
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
  loadingComponent: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100,
  },
  loadingText: {
    fontSize: 25,
    lineHeight: 51,
    color: '#42394C',
    marginTop: 50,
  },
});

Animes.propTypes = {
  anime: PropTypes.object,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
});

export default connect(mapStateToProps, null)(Animes);
