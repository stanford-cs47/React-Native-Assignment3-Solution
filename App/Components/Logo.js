import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Images, Metrics } from '../Themes'

export default function Logo(){
   return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.image} resizeMode="contain"/>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: Metrics.screenWidth,
    height: Metrics.images.logo/2
  }
});
