import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

// const {width} = Dimensions.get('')

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  icon: {
    marginLeft: 10,
    flex: 1,
  },
  label: {
    color: '#fff',
    fontWeight: '500',
    flex: 5,
  },
  description: {
    fontSize: 10,
    marginTop: 5,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
});

const SlideCard = ({ label, description, onPress, backgroundColor }) => (
  <TouchableOpacity
    style={[styles.container, { backgroundColor }]}
    onPress={onPress}
  >
    <View style={styles.row}>
      <Text
        style={styles.label}
        numberOfLines={2}
      >
        {label}
      </Text>

      <Icon
        name="arrow-forward"
        containerStyle={styles.icon}
        color="#fff"
      />
    </View>
    <Text style={styles.description}>{description}</Text>
  </TouchableOpacity>
);

SlideCard.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string.isRequired,
};

export default SlideCard;