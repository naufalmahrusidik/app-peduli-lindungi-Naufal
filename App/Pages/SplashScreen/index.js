import * as React from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, StyleSheet} from 'react-native';
import {IconSplash, Logo_Kpcpen, Logo_Kominfo, Logo_Kemenkes, Logo_Bumn} from '../../assets';

export default SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen')
     }, 2000)
    }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#FFFFFF" />
      <View style={styles.headerImg}>
        <Image source={IconSplash} style={styles.imgHeader} />
      </View>
      <Text style={styles.textFoother}>Bekerjasama Dengan :</Text>
      <View style={styles.content}>
        <Image source={Logo_Kpcpen} style={styles.logo1} />
        <Image source={Logo_Kominfo} style={styles.logo2} />
        <Image source={Logo_Kemenkes} style={styles.logo3} />
        <Image source={Logo_Bumn} style={styles.logo4} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imgHeader: {
    backgroundColor: '#FFFFFF',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgHeader: {
    width: 283, 
    height: 67, 
    left: 38,
    top: 230,
  },
  content: {
    marginTop: 535,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textFoother: {
    position: "absolute",
    width: 124,
    height: 30,
    left: 38,
    right: 228,
    top: 570,
    bottom: 131,
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
    fontSize: 12,
    color: 'black',
  },
  logo1: {
    marginRight: 10,
    height: 35,
    width: 70,
    alignItems: 'center',
    alignContent: 'center'
  },
  logo2: {
    marginRight: 10,
    height: 45,
    width: 40,
    alignItems: 'center',
    alignContent: 'center'
  },
  logo3: {
    marginRight: 10,
    height: 35,
    width: 80,
    alignItems: 'center',
    alignContent: 'center'
  },
  logo4: {
    marginRight: 10,
    height: 30,
    width: 60,
    alignItems: 'center',
    alignContent: 'center'
  },
});