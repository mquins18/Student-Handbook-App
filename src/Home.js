import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const handleButton1Click = () => {
        // Navigate to the desired screen
        navigation.navigate('About'); // Replace 'YourScreenName' with the actual name of your screen
    };

    const handleButton2Click = () => {
        // Navigate to the second screen
        navigation.navigate('Story'); // Replace 'Screen2' with the actual name of your screen
    };
    return (
        <ScrollView>
            <View style={styles.header}>
                <Image
                    source={require('../assets/mseuf-white.png')}
                    style={styles.logo}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Manuel S. Enverga University Foundation</Text>
                    <Text style={styles.subHeaderText}>Education.Empowerment.Excellence</Text>
                </View>
            </View>
            <Image
                source={require('../assets/mseuf-image.png')}
                style={styles.additionalImage}
            />
            <View style={styles.aboveRowContainer}>
                <Text style={styles.aboveRowText}>
                    The Manuel S. Enverga University Foundation will constantly offer quality education
                    which exceeds the regulatory requirements and expectations of our interested parties,
                    both internal and external. We will dynamically pursue quality improvements in our
                    instruction, research, and community service enabling each faculty and staff to do
                    their job right the first and every time.
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.squareContainer}>
                    <Text style={styles.footerText}>Ready to be an Envergan?</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 1</Text>
                    <View style={styles.innerBox}>
                        <Image
                            source={require('../assets/vision.png')}
                            style={styles.innerBoxImage}
                        />
                        <Text style={styles.innerBoxText}>MSEUF Vision, Mission and Goal</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleButton1Click}>
                        <Text style={styles.buttonText}>View</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 2</Text>
                    <View style={styles.innerBox}>
                        <Image
                            source={require('../assets/book.png')}
                            style={styles.innerBoxImage}
                        />
                        <Text style={styles.innerBoxText}>The MSEUF Story</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleButton2Click}>
                        <Text style={styles.buttonText}>View</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subHeaderText: {
        color: 'white',
        fontSize: 13,
        fontStyle: 'italic',
    },
    additionalImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    footer: {
        padding: 20,
        alignItems: 'center',
        marginTop: -50, // Adjust the marginTop to move the footer closer to the image
    },
    squareContainer: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        width: '60%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    footerText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Adjust the spacing between boxes
        marginTop: 20, // Adjust the marginTop as needed
    },
    box: {
        backgroundColor: '#800000', // Adjust the box background color as needed
        padding: 15,
        borderRadius: 10,
        width: '40%',
        alignItems: 'center',
        height: 200,
        shadowColor: 'rgba(0, 0, 0, 0.6)', // Adjust the shadow color as needed
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        
       
    },
    boxText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    aboveRowContainer: {
        marginTop: -60, // Adjust the marginTop as needed
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 30,
        width: '100%',
        height: 240,
        alignSelf: 'center', // Center the container
    },
    aboveRowText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'justify',
        marginTop: 10, // Align text to justify
 
    },
    buttonContainer: {
        marginTop: 8, // Adjust the marginTop as needed
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        //borderWidth: 1,
        
    },
    buttonText: {
        color: 'red',
        fontWeight: 'bold',
    },
    innerBox: {
        backgroundColor: '#FF6865',
        padding: 10,
        marginTop: -60,
        width: '95%',
        height: 160,
        shadowColor: 'rgba(0, 0, 0, 0.2)', // Adjust the shadow color as needed
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5, // For Android
        justifyContent: 'center', // Align the image in the center
        alignItems: 'center',

    },
    innerBoxText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', // Center the text horizontally
        textAlignVertical: 'center',
      
    },
    innerBoxImage: {
        width: '80%', // Adjust the width as needed
        height: '80%', // Adjust the height as needed
        resizeMode: 'contain', // Adjust the resizeMode as needed
    },

});

export default Home;
