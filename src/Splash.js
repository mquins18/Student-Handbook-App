
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);
    },);
    return (
        <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }} duration={2000} animation="fadeInDownBig" >
            <Image
                source={require('../assets/mseuf-logo.png')} // Path relative to the project root
                style={{ width: 250, height: 250, resizeMode: 'contain' }}
            />
            <Text style={styles.splashText}>MSEUF STUDENT HANDBOOK</Text>

        </View>

    );
};

export default Splash;

const styles = StyleSheet.create({
    splashText: {
        color: 'red',
        //fontSize: 15,
        fontWeight: 'bold',
    },


});