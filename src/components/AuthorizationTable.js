import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from 'react-native-elements';

import { primaryColor } from '../config/colors';
import { DEFAULT_MARGIN } from '../config/dimen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: primaryColor,
    paddingHorizontal: DEFAULT_MARGIN,
    paddingVertical: 8,
  },
  headerText: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  rowContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: DEFAULT_MARGIN,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 60,
    marginTop: 20,
  },
  rowText: {
    color: '#000',
    backgroundColor: 'transparent',
    fontSize: 12,
  },
  rowBoldText: {
    color: '#000',
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: '500',
  },
  divider: {
    backgroundColor: '#E2E2E2',
    width: '100%',
    height: 1,
    marginTop: 10,
  },
  invisible: {
    width: 32,
  },
});

const TableHeader = ({ labels }) => (
  <View style={styles.headerContainer}>
    {labels.map(l => (
      <Text
        style={styles.headerText}
        key={l}
      >
        {l}
      </Text>
    ))}
    <View style={styles.invisible} />
  </View>
);

TableHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const TableRow = (props) => {
  const {
    onPress,
    imageSource,
    id,
    date,
    time,
    status,
    isActive,
    onImagePress,
  } = props;

  const getIcon = active => (
    active
      ? 'keyboard-arrow-up'
      : 'keyboard-arrow-down'
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.rowContainer}
    >
      <View style={styles.row}>
        <Text style={styles.rowText}>{id}</Text>
        <Text style={styles.rowText}>{date}</Text>
        <Text style={styles.rowText}>{time}</Text>
        <Text style={styles.rowBoldText}>{status ? 'Aprovado' : 'Reprovado'}</Text>
        <Icon
          name={getIcon(isActive)}
          color="#000"
          size={16}
        />
      </View>

      {isActive
        ? (
          <TouchableOpacity onPress={onImagePress}>
            <Image
              source={{ uri: imageSource }}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )
        : null
      }

      {!isActive ? <View style={styles.divider} /> : null}
    </TouchableOpacity>
  );
};

TableRow.propTypes = {
  onPress: PropTypes.func.isRequired,
  onImagePress: PropTypes.func.isRequired,
  imageSource: PropTypes.string.isRequired,
  // id: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
};

class AuthorizationTable extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    onItemPress: PropTypes.func.isRequired,
    onImagePress: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
  }

  static defaultProps = {
    containerStyle: 0,
    activeItem: undefined,
  }

  static headerLabels = ['ID', 'Data', 'Hora', 'Status']

  keyExtractor = ({ _id: id }) => id

  renderItem = ({ item, index }) => {
    const {
      _id: id,
      avatar: source,
      status,
      createdAt,
    } = item;
    const { activeItem, onItemPress, onImagePress } = this.props;

    return (
      <View>
        {index === 0
          ? <TableHeader labels={AuthorizationTable.headerLabels} />
          : null
        }

        <TableRow
          onPress={() => onItemPress(item)}
          id="12"
          isActive={activeItem === id}
          status={status}
          imageSource={source}
          date={moment(createdAt).format('DD/MM')}
          time={moment(createdAt).format('hh:mm')}
          onImagePress={() => onImagePress(source)}
        />
      </View>
    );
  }

  render() {
    const { data, containerStyle } = this.props;

    return (
      <FlatList
        style={StyleSheet.flatten([styles.container, containerStyle])}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default AuthorizationTable;
