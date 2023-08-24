import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Return from '../../assets/images/svgs/returnButton.svg'
import Maraqi from '../../assets/images/svgs/maraqi.svg';
import { useNavigation } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput'

const { height, width } = Dimensions.get('window');

const ForgotPass2Screen = () => {
  const navigation = useNavigation();

  let otpInput = useRef(null);

  const [code, setcode] = useState('');

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handlePress = () => {
    navigation.navigate('Forgot'as never); 
};
const handleLogin = () => {
  // if (code === '') {
  //   setShowErrorMessage(true);
  // } else {
    navigation.navigate('Forgot3'as never);
  // }
};

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={styles.root}>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',width:'100%',paddingTop:10,paddingBottom:11,paddingRight:10,marginTop:60}}>
              <Pressable onPressIn={handlePress}>
                <Return></Return>
              </Pressable>
            </View>
          <View style={{ flex: 0.5, width: '100%', paddingTop: 11,paddingRight:11,paddingBottom:11, marginBottom: 11 }}>
            <Text style={styles.title}>رمز التحقق</Text>
            <Text style={styles.title1}>ادخلوا الرمز السري الذي توصلتم به عبر البرد الإلكتروني</Text>
          </View>
          <View style={{ flex: 1,marginBottom:20 }}>
            <OTPTextInput tintColor='#8B6B46' inputCount={6} textInputStyle={{borderColor: '#D0BFAD',borderWidth:1,borderRadius:4,backgroundColor:'white',borderBottomWidth:1}} />
          </View>
          
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Pressable onPressIn={handleLogin}>
              <View style={styles.button}>
                <Text style={styles.textButton}>استرجاع كلمة المرور</Text>
              </View>
            </Pressable>
          </View>

          
        </View>
      </KeyboardAwareScrollView>
      <Maraqi style={styles.containerBottom}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EFE9',
  },
  title: {
    fontFamily: 'IBMBold',
    textAlign: 'right',
    fontSize: 25,
  },
  title1: {
    fontFamily: 'IBMLight',
    textAlign: 'right',
    fontSize: 12.5,
    color: 'grey',
  },
  input: {
    width: width * 0.115,
    height: height * 0.06,
    borderWidth: 0.8,
    borderColor: '#D0BFAD',
    borderRadius: 4,
    padding:4,
    margin:7,
    marginBottom: 40,
    backgroundColor: 'white',
    textAlign:'center'
  },
  invalidInput: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#8B6B46',
    width: 0.85 * width,
    height: height * 0.065,
    alignItems: 'center',
    padding: 14,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#d4a373',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 14.5,
    fontFamily: 'IBMBold',
  },
  text: {
    fontSize: 13,
    padding: 5,
    color: '#8B6B46',
    fontFamily: 'IBMLight',
  },
  link: {
    padding: 3,
    color: '#8B6B46',
    fontFamily: 'IBMBold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingRight:4,
    textAlign: 'right',
    fontFamily: 'IBMMedium',
    top:-33,
  },
  containerBottom: {
    opacity: 0.7,
    bottom:32,
  },
});

export default ForgotPass2Screen;