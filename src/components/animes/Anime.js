import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAnime, setLoading } from '../../actions/animeActions';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';

const DEVICE = Dimensions.get('screen');

const Separator = () => <View style={styles.separator} />;

const Anime = (props) => {
  const [load, setLoad] = useState(true);

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
    setLoad(false);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {loading || load ? (
        <View style={styles.loadingComponent}>
          <IconMci name="clock" size={100} color="#332C3C" />
          <Text style={styles.loadingText}>Waiting ...</Text>
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
          <View>
            <View style={styles.mid}>
              <Text style={styles.title}>Information</Text>
              <Separator />
              <View style={styles.midTop}>
                <View style={styles.midTopChild}>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Type: </Text>
                    {anime.type}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Episode: </Text>
                    {anime.episodes}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Status: </Text>
                    {anime.status}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Aired: </Text>
                    {anime.aired.string}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Producers: </Text>
                    {anime.producers.map((producer) => (
                      <Text key={producer.mal_id}>{producer.name}, </Text>
                    ))}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Licensors: </Text>
                    {anime.licensors.map((licensor) => (
                      <Text key={licensor.mal_id}>{licensor.name}, </Text>
                    ))}
                  </Text>
                </View>
                <View style={styles.midTopChild}>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Studios: </Text>
                    {anime.studios.map((studio) => (
                      <Text key={studio.mal_id}>{studio.name}, </Text>
                    ))}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Source: </Text>
                    {anime.source}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Genres: </Text>
                    {anime.genres.map((genre) => (
                      <Text key={genre.mal_id}>{genre.name}, </Text>
                    ))}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Duration: </Text>
                    {anime.duration}
                  </Text>
                  <Text style={styles.subTitle}>
                    <Text style={styles.subTitleList}>Rating: </Text>
                    {anime.rating}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.mid}>
              <Text style={styles.title}>Synopsis</Text>
              <Separator />
              <Text style={styles.subTitle}>{anime.synopsis}</Text>
            </View>
            <View style={styles.mid}>
              <Text style={styles.title}>Background</Text>
              <Separator />
              <Text style={styles.subTitle}>{anime.background}</Text>
            </View>
            <View style={styles.mid}>
              <Text style={styles.title}>Related Anime</Text>
              <Separator />
              <Text style={styles.subTitle}>
                <Text style={styles.subTitleList}>English: </Text>
                {anime.title_english}
              </Text>
            </View>
            <View style={styles.bottom}>
              <View style={styles.bottomChild}>
                <Text style={styles.title}>Opening Theme</Text>
                <Separator />
                {anime.opening_themes.map((opening_theme, i) => (
                  <Text key={i} style={styles.subTitle}>
                    {opening_theme},{' '}
                  </Text>
                ))}
              </View>
              <View style={styles.bottomChild}>
                <Text style={styles.title}>Ending Theme</Text>
                <Separator />
                {anime.ending_themes.map((ending_theme, i) => (
                  <Text key={i} style={styles.subTitle}>
                    {ending_theme},{' '}
                  </Text>
                ))}
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
  mid: {
    marginBottom: 20,
  },
  midTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  midTopChild: {
    width: DEVICE.width * 0.45,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  bottomChild: {
    width: DEVICE.width * 0.45,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 13,
  },
  subTitleList: {
    fontWeight: 'bold',
  },
  subTitle: {
    marginVertical: 5,
    alignItems: 'flex-end',
    fontSize: 11,
    lineHeight: 12,
    color: '#FFFFFF',
  },
  loadingComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  loadingText: {
    fontSize: 25,
    lineHeight: 51,
    color: '#42394C',
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
