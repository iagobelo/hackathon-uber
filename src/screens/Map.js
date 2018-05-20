import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Location, Permissions } from 'expo';

import mapStyle from '../assets/google-maps-style-config';

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
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonLabel: {
        color: '#04166A',
    },
});

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            from: '',
            to: '',
            location: {coords: { latitude: 37.78825, longitude: -122.4324}},
        };
    }

    componentDidMount() {
        this.getLocationAsync();
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
                location,
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        this.setState({ locationResult: JSON.stringify(location), location, });
    };

    handleChange = key => value => this.setState({ [key]: value });

    render() {
        return (
            <View style={styles.view}>
                <MapView style={styles.mapView}
                    provider={PROVIDER_GOOGLE}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    customMapStyle={mapStyle}
                >
                    <MapView.Marker
                        coordinate={this.state.location.coords}
                        title="My Marker"
                        description="Some description"
                    />
                </MapView>

                <View style={{ position: 'absolute', width, height, padding: 20, }}>
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

                   <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            // onPress={}
                        >
                            <Text style={styles.buttonLabel}>Confirmar rota</Text>
                        </TouchableOpacity>
                   </View>
                </View>

            </View>
        );
    }

}

export default Map;