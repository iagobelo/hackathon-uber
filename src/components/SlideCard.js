import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    marginBottom: 50,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    color: '#04166A',
  },
});

const SlideCard = ({ imageSource, subtitle }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={imageSource}
      resizeMode="contain"
    />

    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

SlideCard.propTypes = {
  imageSource: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SlideCard;
