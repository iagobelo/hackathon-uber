import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Notifications } from 'expo';

import { initApiConfig } from '../config/api';
import { Load } from '../components';
import * as AuthorizationActions from '../actions/AuthorizationActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getAuthorizations: PropTypes.func.isRequired,
  }

  componentWillMount() {
    initApiConfig();
    this.subscribeForNotification();
  }

  subscribeForNotification() {
    this.notificationSubscription = Notifications.addListener(this.handleNotification);
  }

  handleNotification = () => {
    this.props.getAuthorizations();
  }

  render() {
    const { children, isLoading } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
        />

        {children}

        <Load
          isVisible={isLoading}
          message="Aguarde"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({ isLoading: app.isLoading });

export default connect(mapStateToProps, { ...AuthorizationActions })(AppContainer);
