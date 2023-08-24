import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, BackHandler, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import Svglogo from '../../assets/images/svgs/MaraqiLogo.svg';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';


const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();


  const handleButtonPress = () => {
    navigation.navigate('Language'as never); // Replace 'Walkthrough' with the appropriate screen name
  };
  return (
    <TouchableWithoutFeedback onPress={handleButtonPress}>
    <View style={styles.container}>
      <Svglogo style={styles.image} /> 
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EFE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // display: flex,
    width: 368,
    height: 368,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  
});
export default WelcomeScreen;