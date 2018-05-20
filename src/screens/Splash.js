import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as AuthActions from '../actions/AuthActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',
  },
});

class Splash extends React.Component {
  static navigationOptions = {
    title: 'Splash',
  }

  static propTypes = {
    checkSession: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  componentDidMount() {
    const { checkSession, navigation } = this.props;
    checkSession(navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
      </View>
    );
  }
}

const mapDispatchToProps = { checkSession: AuthActions.checkSession };

export default connect(null, mapDispatchToProps)(Splash);
