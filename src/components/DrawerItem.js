import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { DEFAULT_MARGIN } from '../config/dimen';
import { primaryColor } from '../config/colors';

const styles = StyleSheet.create({
  normalText: {
    color: '#000',
    fontSize: 14,
  },
  itemsContainer: {
    marginTop: 60,
  },
  iconContainer: {
    marginRight: DEFAULT_MARGIN,
  },
  icon: {
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const getColor = v => (v ? primaryColor : '#000');

const DrawerItem = (props) => {
  const {
    label,
    icon,
    isActive,
    containerStyle,
    onPress,
  } = props;
  const labelStyle = StyleSheet.flatten([styles.normalText, { color: getColor(isActive) }]);
  const itemContainerStyle = StyleSheet.flatten([containerStyle, styles.container]);

  return (
    <TouchableOpacity
      style={itemContainerStyle}
      onPress={onPress}
    >
      <Icon
        name={icon}
        containerStyle={styles.iconContainer}
        iconStyle={styles.icon}
        color={getColor(isActive)}
      />

      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

DrawerItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

DrawerItem.defaultProps = {
  containerStyle: 0,
  onPress: () => { },
  isActive: false,
};

export default DrawerItem;
