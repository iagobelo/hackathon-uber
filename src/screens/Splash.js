import React from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { SlideCard } from '../components';
import slide01 from '../assets/images/01.png';
import slide02 from '../assets/images/02.png';
import slide03 from '../assets/images/03.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
  },
  logo: {
    width: '100%',
  },
  swiperWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
  },
  slide: {
    flex: 1,
  },
});

class Splash extends React.Component {
  static navigationOptions = {
    title: 'Splash',
  }

  static propTypes = {
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} activeDotColor="#04166A">
          <View style={styles.slide}>
            <SlideCard imageSource={slide01} subtitle="Aproveite o melhor de suas viagens sem se preocupar com trânsitos" />
          </View>
          <View style={styles.slide}>
            <SlideCard imageSource={slide02} subtitle="Viva experiências mais intensas com culturas culturas locais" />
          </View>
          <View style={styles.slide}>
            <SlideCard imageSource={slide03} subtitle="Receba uma rota turística baseada no seu destino" />
          </View>
        </Swiper>
      </View>
    );
  }
}

export default Splash;
