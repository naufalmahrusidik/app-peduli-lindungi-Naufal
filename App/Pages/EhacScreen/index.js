import * as React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, StatusBar} from "react-native";
import {Backgrond,
    Logo_CreateEhc,
    Logo_MyEhc,} from "../../assets";

const windowHeight = Dimensions.get("window").height;
const {width} = Dimensions.get("window");

export default EhacScreen = ({navigation}) => {
    return (
        <View style={styles.bgApp}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor='transparent' translucent />

            <View>
                <Image source={Backgrond} style={styles.gambartop} />
            </View>

            <View style={styles.item}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={Logo_CreateEhc} style={styles.gambar1}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.teks1}>Create e-HAC</Text>
                            <Text style={styles.teks1a}>Electronic Health Alert Card</Text>
                        </View>
                </View>

                <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,width:206,marginStart:80,}} />
                
                <View style={{flexDirection: 'row'}}>
                    <Image source={Logo_MyEhc} style={styles.gambar2}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.teks2}>My e-HAC</Text>
                            <Text style={styles.teks2a}>Check your history eHAC here</Text>
                        </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
        bgApp: {
          flex: 1,
          backgroundColor: "white",
        },
        item: {
            backgroundColor: "white",
            padding: 20,
            borderRadius: 30,
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 215,
            marginTop: windowHeight / 35,
            marginLeft: 27,
            marginRight: 27,
            shadowColor: "black",
            shadowOffset: {
            width: 0,
            height: 12,},
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,
        },
        gambartop: {
            height: 200,
            width: width,
            
        },
        gambar1: {
            borderRadius: 20,
            height: 70,
            width: 70,
            resizeMode: "contain"
        },
        gambar2: {
            borderRadius: 20,
            height: 70,
            width: 70,
            resizeMode: 'contain'
        },
        teks1: {
            fontWeight: 'bold',
            fontSize: 16,
            top: 5,
            marginLeft: 10
        },
        teks1a: {
            fontSize: 14,
            top: 5,
            marginLeft: 10,
            color:"#8A8A8A"
        },
        teks2: {
            fontWeight: 'bold',
            fontSize: 16,
            top: 5,
            marginLeft: 10
        },
        teks2a: {
            fontSize: 14,
            top: 5,
            marginLeft: 10,
            color:"#8A8A8A"
        },
      });