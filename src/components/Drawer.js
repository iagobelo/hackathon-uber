import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import avatar from '../assets/images/avatar.png';
import { DEFAULT_MARGIN } from '../config/dimen';
import DrawerItem from './DrawerItem';
import * as AuthActions from '../actions/AuthActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: DEFAULT_MARGIN,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  perfilTextContainer: {
    justifyContent: 'center',
    marginLeft: DEFAULT_MARGIN,
  },
  name: {
    fontWeight: '600',
    color: '#000',
    fontSize: 18,
  },
  normalText: {
    color: '#000',
    fontSize: 14,
  },
  itemsContainer: {
    marginTop: 60,
  },
  drawerItemContainer: {
    marginTop: 22,
  },
});

class Drawer extends React.Component {
  static propTypes = {
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
    logout: PropTypes.func.isRequired,
    perfil: PropTypes.objectOf(PropTypes.any),
  }

  static defaultProps = {
    perfil: {
      name: 'Carregando',
      email: 'carregando',
    },
  }

  componentDidMount() { }

  render() {
    const { navigation, logout, perfil } = this.props;
    const { name, email } = perfil;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Image
              source={avatar}
              resizeMode="contain"
              style={styles.avatar}
            />

            <View style={styles.perfilTextContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.normalText}>{email}</Text>
            </View>
          </View>

          <View style={styles.itemsContainer}>
            <DrawerItem
              label="Histórico"
              icon="history"
              isActive
            />

            <DrawerItem
              label="Relatório"
              icon="insert-chart"
              containerStyle={styles.drawerItemContainer}
            />

            <DrawerItem
              label="Sair"
              icon="exit-to-app"
              containerStyle={styles.drawerItemContainer}
              onPress={() => logout(navigation)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ perfil: auth.perfil });

export default connect(mapStateToProps, { ...AuthActions })(Drawer);
