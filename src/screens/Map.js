import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Location, Permissions } from 'expo';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
    },
    view: {
        flex: 1,
    },
    mapView: {
        flex: 1,
    },
    textInput: {
        marginTop: 20,
        backgroundColor: '#f5deb3',

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
                >
                    <MapView.Marker
                        coordinate={this.state.location.coords}
                        title="My Marker"
                        description="Some description"
                    />
                </MapView>

                <View style={{ position: 'absolute' }}>
                    <TextInput
                        style={styles.textInput}
                        placeHolder="from"
                        onChangeText={this.handleChange('from')}
                        value={this.state.from}>
                    </TextInput>

                    <TextInput
                        style={styles.textInput}
                        placeHolder="to"
                        onChangeText={this.handleChange('to')}
                        value={this.state.to}>
                    </TextInput>

                    <TouchableOpacity style={styles.button}
                    // onPress={}
                    >
                        <Text>
                            Test
                </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}

export default Map;