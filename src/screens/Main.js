import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import PropTypes from 'prop-types';
import { SuggestionCard } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 30,
    padding: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: 50,
  },
  description: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  input: {
    // backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
});

class Main extends React.Component {
  static propTypes = {
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  state = {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Icon
          name="close"
          containerStyle={styles.icon}
        />

        <Text style={styles.title}>Qual sua rota?</Text>

        <TextInput
          style={styles.input}
          label="Ex: Rua do Apolo, 235"
        />

        <Text style={styles.description}>Sugestões</Text>

        <SuggestionCard
          label="Passei ciclistico não sei das quantas"
          description="25km (30min)"
          backgroundColor="#FF39D6"
        />

        <SuggestionCard
          label="Passei ciclistico não sei das quantas"
          description="25km (30min)"
          backgroundColor="#FF39D6"
        />

        <SuggestionCard
          label="Passei ciclistico não sei das quantas"
          description="25km (30min)"
          backgroundColor="#FF39D6"
        />

        <View style={{ height: 30 }} />
      </ScrollView>
    );
  }
}

export default Main;
