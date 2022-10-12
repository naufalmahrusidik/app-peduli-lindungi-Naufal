import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, StatusBar} from 'react-native';
import {Icon_Empty} from '../../assets';

export default CovidTextScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            barStyle="light-content"
            animated={true}
            backgroundColor="#FFFFFF" />

        <Image source={Icon_Empty} style={styles.imgHeader} />
        
        <View style={styles.content}>
            <Text style={styles.text}>You do not have a history of COVID-19 test</Text>
            <Text style={styles.text}>results. Make sure you do a COVID-19 tes at a laboratory</Text>
            <Text style={styles.text}>affiliated with the Ministry of Health: 
                <Text style={styles.BodyText}> PCR test lab</Text> or </Text>
            <Text style={styles.BodyText}> Antigen test lab</Text>
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
        width: 234, 
        height: 237, 
        marginStart: 60,
        top: 140,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily:'Poppins-Light',
        color: 'black',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
    },
    BodyText: {
        fontFamily:'Poppins-Light',
        color: '#54B9ED',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
