import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Return from '../../assets/images/svgs/returnButton.svg'
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const ForgotPass3Screen = () => {
    const navigation = useNavigation();

  const [password1, setpassword1] = useState('');
  const [password2, setpassword2] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = () => {
    if (password1 === '' || password2 === '') {
      setShowErrorMessage(true);
    } else {
      // Perform login logic here
    }
  };

  const handlePress = () => {
    navigation.navigate('Forgot2'as never); 
};
  const handlePressForgot = () =>{
    navigation.navigate('Forgot' as never);
  }

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={styles.root}>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',width:'100%',padding:10,marginTop:60}}>
                <Pressable onPressIn={handlePress}>
                <Return></Return>
                </Pressable>
            </View>
        <View style={{ flex: 0.5, width: '100%', padding: 11, marginBottom: 11 }}>
            <Text style={styles.title}>كلمة المرور الجديدة</Text>
            <Text style={styles.title1}>ادخلوا كلمة المرور الجديدة</Text>
        </View>
          <View style={{ flex: 1 }}>
            <View>
              <TextInput
                style={[styles.input, showErrorMessage && password1 === '' ? styles.invalidInput : null]}
                placeholder="كلمة المرور الجديدة"
                placeholderTextColor="#8B6B46"
                onChangeText={setpassword1}
                value={password1}
                selectionColor='black'
              />
              {showErrorMessage && password1 === '' && <Text style={styles.errorText}>ينبغي تعبئة هذه الخانة</Text>}
            </View>
            <View>
              <TextInput
                style={[styles.input, showErrorMessage && password2 === '' ? styles.invalidInput : null]}
                placeholder="تأكيد كلمة المرور"
                placeholderTextColor="#8B6B46"
                onChangeText={setpassword2}
                value={password2}
                selectionColor='black'

              />
              {showErrorMessage && password2 === '' && <Text style={styles.errorText}>ينبغي تعبئة هذه الخانة</Text>}
            </View>
          </View>
          
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Pressable onPress={handleLogin}>
              <View style={styles.button}>
                <Text style={styles.textButton}>تأكيد تغيير كلمة المرور</Text>
              </View>
            </Pressable>
          </View>

          
        </View>
      </KeyboardAwareScrollView>
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
    width: width * 0.85,
    height: height * 0.075,
    borderWidth: 0.8,
    borderColor: '#D0BFAD',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 40,
    backgroundColor: 'white',
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
});

export default ForgotPass3Screen;