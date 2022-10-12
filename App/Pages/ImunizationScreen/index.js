import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {Icon_Covid,
    Icon_CheckIn,
    Icon_Child} from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default function ImunizationScreen() {
    return (
        <View style={styles.bgApp}>
            <View style={styles.item}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={Icon_Covid} style={styles.gambar1}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.teks1}>COVID-19 Vaccination</Text>
                            <Text style={styles.teks1a}>See your vaccine certificate </Text>
                            <Text style={styles.teks1a}>here</Text>
                        </View>
                </View>
            <View style={{borderBottomColor: 'black',borderBottomWidth: StyleSheet.hairlineWidth,width:206,marginStart:80,}}/>
                <View style={{flexDirection: 'row'}}>
                    <Image source={Icon_CheckIn} style={styles.gambar2}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.teks2}>Check-In Verification</Text>
                            <Text style={styles.teks2a}>COVID-19 vaccine certificate</Text>
                            <Text style={styles.teks2a}>verification in EU format</Text>
                        </View>
                </View>
            <View style={{borderBottomColor: 'black',borderBottomWidth: StyleSheet.hairlineWidth,width:206,marginStart:80,}}/>
                <View style={{flexDirection: 'row'}}>
                    <Image source={Icon_Child} style={styles.gambar2}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.teks2}>Child Immunization</Text>
                            <Text style={styles.teks2a}>See your child's immunization</Text>
                            <Text style={styles.teks2a}>record here</Text>
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
            height: 340,
            marginTop: windowHeight / 35,
            marginLeft: 27,
            marginRight: 27,
            shadowColor: "black",
            shadowOffset: {
            width: 0,
            height: 2,},
            shadowOpacity: 0.2,
            shadowRadius: 100,
            elevation: 10,
            position: 'relative'
        },
        gambar1: {
            borderRadius: 20,
            height: 70,
            width: 70,
        },
        gambar2: {
            borderRadius: 20,
            height: 70,
            width: 70,
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
            color:"#8A8A8A",

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
              color:"#8A8A8A",
        },
      })