import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { primaryColor } from '../config/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  message: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
});

const Load = ({ isVisible, message }) => (isVisible
  ? (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={primaryColor}
      />

      <Text style={styles.message}>{message}</Text>
    </View>
  )
  : null
);

Load.propTypes = {
  isVisible: PropTypes.bool,
  message: PropTypes.string,
};

Load.defaultProps = {
  isVisible: false,
  message: '',
};

export default Load;
