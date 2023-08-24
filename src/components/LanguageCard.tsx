import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import {useFonts} from 'expo-font';

const {height, width} = Dimensions.get('window');

const LanguageCard = ({ language, flag, selected, onPress }) => {
  const [loaded] = useFonts({
    IBMMedium: require('../../assets/fonts/IBMMedium.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={[styles.card, selected && styles.selectedCard]}
        onPress={onPress}
        activeOpacity={1}
      >
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <View style={styles.flagContainer}>{flag}</View>
          <Text style={[styles.languageName, selected && styles.selectedLanguageName]}>
            {language}
          </Text>
        </View>
        <View>
          <Image
            source={selected ? require('../../assets/images/button.png') : require('../../assets/images/Defaultbutton.png')}
            style={styles.buttonImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width*0.87,
    height:height*0.07,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#D0BFAD',
    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    activeOpacity: 1,
  },
  selectedCard: {
    backgroundColor: '#007D71',
  },
  flagContainer: {
    marginRight: 10,
    padding: 5,
    borderRadius: 4,
  },
  languageName: {
    color: '#404446',
    fontSize: 14,
    marginTop:4,
    // fontFamily:'IBMMedium',
  },
  ArabicName: {
    textAlign: 'right',
    width: '100%'
  },
  selectedLanguageName: {
    color: 'white',
  },

  // button: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   marginLeft: 10,
  //   alignItems: 'center',
  // },
  buttonImage: {
    width: width*0.066,
    height: width*0.064,
    marginLeft: 16,
    marginRight: 2,
  },
});

export default LanguageCard;