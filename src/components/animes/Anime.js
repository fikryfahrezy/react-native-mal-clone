import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getAnime, setLoading } from '../../actions/animeActions';

const DEVICE = Dimensions.get('screen');

class Separator extends React.Component {
  render() {
    return <View style={styles.separator} />;
  }
}

const Anime = (props) => {
  const {
    route: {
      params: { params },
    },
    anime: { anime, loading },
    getAnime,
    setLoading,
  } = props;

  useEffect(() => {
    setLoading();
    getAnime(params.id);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {loading ? (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.top}>
            <Image source={{ uri: anime.image_url }} style={styles.coverImg} />
            <View style={styles.topLeft}>
              <View style={styles.topLeftChild}>
                <Text style={styles.title}>Title</Text>
                <Separator />
                <Text style={styles.subTitle}>
                  <Text style={styles.subTitleList}>English: </Text>
                  {anime.title_english}
                </Text>
                <Text style={styles.subTitle}>
                  <Text style={styles.subTitleList}>Japanese: </Text>
                  {anime.title_japanese}
                </Text>
              </View>
              <View style={styles.topLeftChild}>
                <Text style={styles.title}>Statistics</Text>
                <Separator />
                <Text style={styles.subTitle}>
                  <Text style={styles.subTitleList}>Score: </Text>
                  {anime.score} {`(scored by ${anime.scored_by}) users`}
                </Text>
                <Text style={styles.subTitle}>
                  <Text style={styles.subTitleList}>Ranked: </Text>#{anime.rank}
                </Text>
                <Text style={styles.subTitle}>
                  <Text style={styles.subTitleList}>Popularity: </Text>
                  {anime.popularity}
                </Text>
                <Text style={styles.subTitle}>
                  <Text style={styles.subTitleList}>Members: </Text>
                  {anime.members}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: DEVICE.width * 0.25,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#F08BBD',
    borderBottomWidth: 2,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverImg: {
    width: DEVICE.width * 0.4,
    height: DEVICE.height * 0.3,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  topLeft: {
    width: DEVICE.width * 0.45,
  },
  topLeftChild: {
    marginVertical: 10,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 13,
  },
  subTitle: {
    marginVertical: 5,
    alignItems: 'flex-end',
    fontSize: 11,
    lineHeight: 12,
    color: '#FFFFFF',
  },
  subTitleList: {
    fontWeight: 'bold',
  },
});

Anime.propTypes = {
  anime: PropTypes.object,
  getAnime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anime: state.anime,
});
export default connect(mapStateToProps, { getAnime, setLoading })(Anime);
