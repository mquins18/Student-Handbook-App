import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const About = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/back.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>MSEUF Vision, Mission and Goal</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.box}>
                    <Text style={styles.boxTitle}>OUR VISION</Text>
                    <Text style={styles.boxText}>
                        In 2030, the Manuel S. Enverga University Foundation is
                        a globally competitive university with high concentrations
                        of talent, excellent teaching environment, rigorous
                        program quality, sufficient resources, and a culture
                        of collaboration.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxTitle}>OUR MISSION</Text>
                    <Text style={styles.boxText}>
                        The University is a private non-stock non-profit
                        non-sectarian educational foundation with a three-fold
                        function - instruction, research, and community service
                        - offering responsive and alternative programs supportive
                        of national development and standards of global excellence.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxTitle}>OUR GOAL</Text>
                    <Text style={styles.boxText}>
                        MSEUF shall produce graduates who have research-based
                        knowledge, leadership and management skills,
                        and professionalism.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
 
        alignItems: 'left',
        backgroundColor: 'red',
        justifyContent: 'center',
   

        
    },
    header: {
        flexDirection: 'row',
        //alignItems: 'center',
        //backgroundColor: 'red',
        padding: 10,
        //marginBottom: 20,
        height: '9%',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    box: {
        backgroundColor: '#FFDCD1',
        padding: 30,
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5, // For Android
        borderWidth: 1,
        borderColor: '#FFAC9F',
        justifyContent: 'center', // Align the content in the center
        alignItems: 'center',
    },
    boxTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        color: 'red',
    },
    boxText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
    icon: {
        width: 30,  // Adjust the width as needed
        height: 30, // Adjust the height as needed
        resizeMode: 'contain',
        marginTop: 8,
    },
});

export default About;
