import * as React from 'react';
import {
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const PrimaryButton=(props) =>{
    return (
        <TouchableOpacity  style={[styles.btnContainer, props.style]} onPress={props.onPress}>
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor: '#006175',
        alignItems: "center",
        padding: 10,
        marginTop: 30,
        marginLeft: 34,
        marginRight: 34,
        borderRadius: 10,
    },
    btnText:{
        color: "white",
        fontWeight: "bold",
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
})

export default PrimaryButton;