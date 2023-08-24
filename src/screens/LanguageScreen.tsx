
import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableWithoutFeedback, TouchableOpacity,Image, Button,Dimensions } from 'react-native';
import LanguageCard from '../components/LanguageCard';
import ArabicLanguageCard from '../components/ArabicLanguageCard';
import Maraqi from '../../assets/images/svgs/maraqi.svg';
import CountryFlag from "react-native-country-flag";
import {useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import {RPH,RPW} from '../PWH' 
const {height, width} = Dimensions.get('window');



const languages = [
  { id: 2, name: 'English', flag: <CountryFlag isoCode="us" size={19} style={{borderRadius: 3,width:width*0.07}} />, selected: false  },
  { id: 3, name: 'Français', flag: <CountryFlag isoCode="fr" size={19} style={{borderRadius: 3,width:width*0.07}}/>, selected: false  },
  { id: 4, name: 'Espagnol', flag: <CountryFlag isoCode="es" size={19} style={{borderRadius: 3,width:width*0.07}}/>
  , selected: false  },
];

const LanguageSelectionScreen=() =>{
  const navigation = useNavigation();

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };

  const [loaded] = useFonts({
    IBMBold: require('../../assets/fonts/IBMBold.ttf'),
    IBMLight: require('../../assets/fonts/IBMLight.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const handleButtonPress = () => {
    navigation.navigate('Walkthrough'as never); // Replace 'Walkthrough' with the appropriate screen name
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%',padding: 28}}>
        <Text style={styles.title}>اختيار لغة التطبيق</Text>
        <Text style={styles.title1}>يمكنكم تغيير اللغة لاحقًا عن طريق الإعدادات</Text>
      </View>
      <View style={styles.cardContainer}>
      <View>
      <ArabicLanguageCard
      key={1}
      language={'العربية'}
      flag={<CountryFlag isoCode="sa" size={19} style={{borderRadius: 3,width:width*0.07}}/>}
      selected={selectedLanguage === 'العربية'}
      onPress={() => handleLanguageSelection('العربية')}
      />
      </View>
      <View>
      {languages.map((language) => (
        <LanguageCard
          key={language.id}
          language={language.name}
          flag={language.flag}
          selected={selectedLanguage === language.name}
          onPress={() => handleLanguageSelection(language.name)}
        />
      ))}
    </View>
    </View>
      <View >
        <TouchableWithoutFeedback onPressIn={handleButtonPress}>
          <View style={styles.button} >
            <Text style={styles.textButton} >بسم الله توكلت على الله</Text>
          </View>
        </TouchableWithoutFeedback> 
      </View>
      <Maraqi style={styles.containerBottom}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EFE9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily:'IBMBold',
    textAlign: 'right',
    fontSize: RPW(7),
    marginTop:RPH(16)

  },
  title1: {
    fontFamily:'IBMLight',
    textAlign: 'right',
    fontSize: RPW(3.7),
  },
  cardContainer: {
    width: '80%',
    marginBottom: RPW(3.7),
  },
  containerBottom: {
    marginTop:RPH(14),
    opacity: 0.7,
  },
  button:{
    backgroundColor: '#936639',
    width: RPW(87),
    height:RPH(7.4),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#d4a373',
    justifyContent: 'center',
  },
  textButton:{
    color:'white',
    fontSize: RPW(3.7),
    fontFamily:'IBMBold'
  }
});


export default LanguageSelectionScreen;