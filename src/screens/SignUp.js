import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { DEFAULT_MARGIN } from '../config/dimen';
import * as AuthActions from '../actions/AuthActions';
import { primaryColor, primaryDark } from '../config/colors';
import logo from '../assets/images/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_MARGIN,
    backgroundColor: 'white',
  },
  input: {
    borderBottomColor: '#000',
    color: '#000',
  },
  button: {
    marginTop: 30,
    backgroundColor: primaryColor,
    paddingVertical: 5,
    marginHorizontal: 0,
  },
  formContainer: {
    marginTop: DEFAULT_MARGIN,
  },
  logo: {
    width: '100%',
  },
  forgotText: {
    color: primaryDark,
    backgroundColor: 'transparent',
    marginTop: 5,
  },
  registerText: {
    color: primaryDark,
    backgroundColor: 'transparent',
    marginTop: 20,
    alignSelf: 'center',
  },
  arrow: {
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
  },
});

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Login',
  }

  static propTypes = {
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
    signUp: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleSignUpPress = this.handleSignUpPress.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  state = {
    name: '',
    email: '',
    password: '',
  }

  handleSignUpPress = () => {
    const { signUp, navigation } = this.props;
    signUp(this.state, navigation);
  }

  handleBackPress = () => this.props.navigation.goBack()

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon
            name="arrow-back"
            onPress={this.handleBackPress}
            color="#000"
          />
        </View>

        <ScrollView>
          <Image
            source={logo}
            resizeMode="contain"
            style={styles.logo}
          />

          <View style={styles.formContainer}>
            <TextInput
              label="Nome"
              underlineColor="#000"
              underlineColorAndroid="#000"
              placeholderTextColor="#000"
              selectionColor="#000"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              style={styles.borderBottomColor}
            />

            <TextInput
              label="E-mail"
              underlineColor="#000"
              underlineColorAndroid="#000"
              placeholderTextColor="#000"
              selectionColor="#000"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={styles.borderBottomColor}
            />

            <TextInput
              label="Password"
              underlineColor="#000"
              underlineColorAndroid="#000"
              placeholderTextColor="#000"
              selectionColor="#000"
              keyboardType="email-address"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={styles.borderBottomColor}
            />

            <Button
              onPress={this.handleSignUpPress}
              style={styles.button}
              color="#fff"
            >
              Registrar
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = { signUp: AuthActions.signUp };

export default connect(null, mapDispatchToProps)(SignUp);
