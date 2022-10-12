import * as React from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, StyleSheet, TextInput} from 'react-native';
import {Logo_Top, Logo_Kpcpen, Logo_Kominfo, Logo_Kemenkes, Logo_Bumn} from '../../assets';
import { PrimaryButton } from "../../Componets";

export default LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#FFFFFF" />
      <View style={styles.headerImg}>
        <Image source={Logo_Top} style={styles.imgHeader} />
      </View>
      <Text style={styles.textFoother}>Bekerjasama Dengan :</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputStyle} />
      <TextInput
        placeholder="Password"
        style={styles.inputStyle}
        secureTextEntry={true} />
      <PrimaryButton
        title="Login"
        style={styles.customeButton}
        onPress={() => navigation.navigate("HomeScreen")} />
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
    width: 210,
    height: 200,
    marginStart: 78,
    marginTop: 50,
    backgroundColor: 'white',
  },
  content: {
    marginTop: 134,
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
  inputStyle: {
    height: 49,
    marginTop: 23,
    borderWidth: 1,
    paddingLeft: 30,
    borderRadius: 10,
    borderColor: '#006175',
    fontSize: 16,
    marginStart: 34,
    marginEnd: 34,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF'
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
})