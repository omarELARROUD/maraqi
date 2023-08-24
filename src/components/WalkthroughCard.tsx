import { useFonts } from "expo-font";
import { View,Text, Dimensions,StyleSheet } from "react-native";
import { PageIndicator } from "react-native-page-indicator";
import {RPH,RPW} from '../PWH' 
const {height, width} = Dimensions.get('window');

const WalkthroughCard = ({item, text}) => {

    const [loaded] = useFonts({
        IBMBold: require('../../assets/fonts/IBMBold.ttf'),
        IBMLight: require('../../assets/fonts/IBMLight.ttf'),
      });
    
      if (!loaded) {
        return null;
      }
    return (
        <View style={{flex:2,justifyContent:'flex-start',alignItems:'center',margin:width*0.1}}>
            <View>{item}</View>
            <View style={{width:width*0.8,justifyContent:'center'}}>
                <Text style={{fontSize:RPW(3.6),marginTop:8,textAlign:'center',padding:14,fontFamily:'IBMLight',color:'white',letterSpacing: 2.5,}}>{text}</Text>
            </View>
        </View>
      );
}
const styles = StyleSheet.create({
wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default WalkthroughCard;


