import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Location, Permissions } from 'expo';

import mapStyle from '../assets/google-maps-style-config';
import cicloFaixas from '../assets/ciclofaixas';

const { width, height } = Dimensions.get('window');

const shadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 5,
  shadowOpacity: 1.0,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 12,
    elevation: 3,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  textInput: {
    marginTop: 30,
    backgroundColor: '#fff',
    height: 50,
    marginHorizontal: 10,
    paddingLeft: 15,
    elevation: 3,
    padding: 5,
  },
  input2: {
    marginTop: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    height: 50,
    elevation: 3,
    paddingLeft: 15,
    padding: 5,
  },
  buttonContainer: {
    top: height - 50,
    flex: 1,
    left: 30,
    right: 30,
    justifyContent: 'center',
    position: 'absolute',
    width: '80%',
  },
  buttonLabel: {
    color: '#04166A',
  },
  inputContainer: {
    position: 'absolute',
    width,
    height: 110,
    padding: 20,
  },
});

class Map extends Component {
  state = {
    from: '',
    to: '',
    location: {
      latitude: -8.063162,
      longitude: -40.871250,
    },
    region: {
      latitude: -8.063162,
      longitude: -40.871250,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        location: undefined,
      });
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    });
  };

  handleChange = key => value => this.setState({ [key]: value });

  render() {
    const data = cicloFaixas.features[0].geometry.coordinates
      .map(v => ({ latitude: v[0], longitude: v[1] }));
    console.log(data);

    return (
      <View style={styles.view}>
        <MapView
          style={styles.mapView}
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          zoomEnabled
          scrollEnabled
          customMapStyle={mapStyle}
        >
          <MapView.Marker
            coordinate={this.state.location}
            title="My Marker"
            description="Some description"
          />

          <MapView.Polyline
            coordinates={[{
              latitude: -34.91687,
              longitude: -8.09554
            }, this.state.location]}
            strokeWidth={2}
            strokeColor="red" />
        </MapView>


        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Origem"
            onChangeText={this.handleChange('from')}
            value={this.state.from}
            underlineColorAndroid="transparent"
          />

          <TextInput
            style={styles.input2}
            placeholder="Destino"
            onChangeText={this.handleChange('to')}
            value={this.state.to}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
          // onPress={}
          >
            <Text style={styles.buttonLabel}>Confirmar rota</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Map;
