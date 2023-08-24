import React, { useRef } from 'react';
import { Animated, Dimensions, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import { PageIndicator } from 'react-native-page-indicator';
import WalkthroughCard from '../components/WalkthroughCard';
import Maraqi from '../../assets/images/svgs/maraqi1.svg';
import Group from '../../assets/images/svgs/group.svg';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import {RPH,RPW} from '../PWH' 

const {height, width} = Dimensions.get('window');

const pages = [
    { id: 1, item: <Group/>, text: 'أينما كنت ومهما كانت ظروفك وانشغالاتك، يُساعدك تطبيق المراقي على تعلم كتاب الله تعالى بيُسر وإتقان وفق البرنامج الذي يُناسبك' },
    { id: 2, item: <Group/>, text: 'أينما كنت ومهما كانت ظروفك وانشغالاتك، يُساعدك تطبيق المراقي على تعلم كتاب الله تعالى بيُسر وإتقان وفق البرنامج الذي يُناسبك' },
    { id: 3, item: <Group/>, text: 'أينما كنت ومهما كانت ظروفك وانشغالاتك، يُساعدك تطبيق المراقي على تعلم كتاب الله تعالى بيُسر وإتقان وفق البرنامج الذي يُناسبك' },
    // Add more data as needed
  ];
  

const WalkthroughScreen = ({ key,item, text}) => {
  const navigation = useNavigation();
  // const {height, width} = Dimensions.get('screen');
  const scrollX = useRef(new Animated.Value(0)).current;
  const animatedCurrent = useRef(Animated.divide(scrollX, width)).current;

  const [loaded] = useFonts({
        IBMBold: require('../../assets/fonts/IBMBold.ttf'),
        IBMMedium: require('../../assets/fonts/IBMMedium.ttf'),
        IBMLight: require('../../assets/fonts/IBMLight.ttf'),

      });
    
      if (!loaded) {
        console.log('not loaded');
        return null;
      }

      const handleButtonPress = () => {
        navigation.navigate('Login'as never);
      };

      const handleRegister = () => {
        navigation.navigate('Register'as never);
      };

  return (
    <View style={styles.root}>
        <View style={styles.containerBottom}>
             <Maraqi />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>المــــراقي لتعليـــم القــــــرآن الكريـــــــم عن بعد</Text>
            <Text style={styles.titleEng}>MARAQI, ONLINE QURAN LEARNING</Text>
        </View>
      <View style={{height:RPH(50),marginTop:RPH(5),width:'100%'}}>
      <Animated.ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page]}>
            <WalkthroughCard key={page.id} item={page.item} text={page.text} />
          </View>
        ))}
      </Animated.ScrollView>
      </View>
      <View style={{}}>
      <PageIndicator
        style={styles.pageIndicator}
        count={pages.length}
        current={animatedCurrent}
        color='white'
        size={RPW(2.2)}
        dashSize={RPW(6)}
      />
      </View>
      
      <View>
      <TouchableWithoutFeedback onPressIn={handleRegister}>
          <View style={styles.button} >
            <Text style={styles.textButton} >التسجيل في المراقي</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{flexDirection:'row-reverse',marginTop:width*0.08}}>
        <Text style={styles.text}>لديك حساب؟</Text>
        <Pressable onPress={handleButtonPress}>
          <Text style={styles.link}>تسجيل الدخول</Text>
          <View style={styles.underline} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#8B6B46',
  },
  titleContainer: {
    height:RPW(6)
  },
  containerBottom: {
    marginTop:RPH(13)
  },
  title: {
    fontFamily:'IBMBold',
    fontSize: RPW(3.6),
    color:'#FFFFFF',
    opacity: 0.85,

  },
  titleEng: {
    fontFamily:'IBMMedium',
    fontSize: RPW(2.53),
    color:'#FFFFFF',
    letterSpacing: RPW(0.38),
    opacity: 0.85,
  },
  page: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  pageIndicator: {
    marginTop:7
  },
  button:{
    backgroundColor: '#ffff',
    width: RPW(45),
    height:RPH(7),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#d4a373',
    justifyContent: 'center',
    marginTop:RPH(4),
  },
  textButton:{
    color:'#000',
    fontSize: RPW(3.6),
    fontFamily:'IBMBold'
  },
  text:{
    fontSize:RPW(3),
    padding:3,
    color:'white',
    fontFamily:'IBMLight'
  },
  link:{
    padding:1,
    color:'white',
    fontFamily:'IBMMedium'
  },
  underline: {
    borderBottomColor: 'white',
    borderBottomWidth: RPW(0.3),
    width:RPW(22),
    marginLeft:5
  },
});

export default WalkthroughScreen;