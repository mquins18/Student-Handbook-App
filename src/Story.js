import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Story = () => {
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
            <Image
                source={require('../assets/story.jpg')}
                style={styles.additionalImage}
            />
            <Text style={styles.scrollText} >The MSEUF Story</Text>
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.scrollBody}>
                    Like a phoenix rising from the ashes, the Manuel S. Enverga University was born from the 
                    smoldering ruins of World War II. The debilitating aftermath of the war brought education 
                    to a halt. The economic dislocation that ensued left many young people of school age with 
                    little chance of getting an education. Parents from many parts of Quezon Province had to 
                    mortgage their lands or sell their last carabao to send their children to college in Manila. 
                    The situation presented both a challenge and an opportunity to a group of pioneering and vision-driven 
                    individuals led by Dr. Manuel S. Enverga who founded the Luzonian Colleges on February 11, 1947 to give 
                    needy students access to higher education.
                </Text>
                <Text style={styles.scrollBody}>
                    The Securities and Exchange Commission granted Luzonian Colleges its charter on February 11, 1947. 
                    A little more than a month later, the Bureau of Private Schools issued a government permit for 
                    the school to open in April 1947.
                </Text>
                <Text style={styles.scrollBody}>
                    In the summer of 1947, 102 students, mostly youthful war veterans, enrolled in the two-year 
                    Associate in Arts program in the College of Liberal Arts, the first college to be established. 
                    The secretarial course opened on May 2, 1947 even as the young college obtained official permission 
                    to open the secondary school and the education programs in June 1947. Meanwhile, in 1948 heeding the 
                    clamor of the citizens of Sampaloc, Quezon, a high school was put up in that town.
                </Text>
                <Text style={styles.scrollBody}>
                    Barely two years after, the College of Law opened to serve the needs of Associate in Arts graduates 
                    who wanted to take up law at nighttime. The complete commerce program was given the authority to 
                    open on October 5, 1949. The year 1950 saw the opening of a satellite campus in Catanauan, Quezon. 
                    The Institute of Graduate Studies and Research and the College of Engineering opened in 1955, giving 
                    Luzonian students more varied career choices. The San Antonio, Quezon campus was set up on June 22, 1959. 
                    In 1960, the school started to offer technical courses and two years later, the College of Architecture, 
                    became a fully independent academic program from the College of Engineering.
                </Text>
                <Text style={styles.scrollBody}>
                    The Luzonian Colleges attained full university status on August 8, 1968 with education secretary 
                    Onofre D. Corpus signing the university charter. Two years later, on February 12, 1970, the 
                    Luzonian University became a foundation, a strategic decision that demonstrated the civic-mindedness 
                    of its founders and incorporators who donated their shares of stocks to the University, a move that
                     would eventually prove to be unique but forward looking in the annals of higher education.
                </Text>
                <Text style={styles.scrollBody}>
                    Founder-president Dr. Manuel S. Enverga passed away on June 14, 1981, secure in the knowledge that 
                    the university he founded would continue to serve the citizens of Quezon and the rest of Luzon. The 
                    Board of Trustees approved the renaming of the Luzonian University Foundation to Manuel S. Enverga 
                    University Foundation in 1983 in recognition of the founder-president’s magnanimity.
                </Text>
                <Text style={styles.scrollBody}>
                    Meanwhile, the Institute of Physical Education and Sports began to operate in 1979 as an adjunct of 
                    the College of Education while the College of Criminology and Law Enforcement, that used to be under 
                    the umbrella of the College of Arts and Sciences, became a full-fledged college in 1986. Similarly, 
                    the citizens of Candelaria, Quezon gathered written petitions for a satellite campus to open in the area.
                </Text>
                <Text style={styles.scrollBody}>
                    Thus, on June 15, 1992 with the required physical plant and laboratory facilities in place, the Candelaria 
                    campus started its operations. The Department of Education, Culture and Sports gave full recognition to 
                    the secondary education program on December 18, 1992. The full permit for the college programs was released in 1995.
                </Text>
                <Text style={styles.scrollBody}>
                    The global need for competent mariners spurred the opening of the Institute of Maritime Studies in 1993. The BS 
                    Tourism program was offered in 1997 under the College of Arts and Sciences. Two years later, the program was 
                    merged with the Institute of Hotel and Restaurant Management organized in 1995 due to the parallelism and 
                    similarity of courses, faculty and laboratory requirements.
                </Text>
                <Text style={styles.scrollBody}>
                    Meanwhile, the Environmental Science and Public Administration programs were offered in school year 2000-01 in 
                    response to the growing need for professionals in environmental management and preservation and public governance.
                     Moreover, the College of Nursing and Allied Health Sciences opened in school year 2002-03 to serve the growing demand 
                     for globally trained nurses and caregivers.
                </Text>
                <Text style={styles.scrollBody}>
                    Today, the Manuel S. Enverga University Foundation offers various post-graduate programs in the liberal arts, education,
                    physical education, business administration, public administration, and computer studies, and undergraduate programs in 
                    the arts and sciences, public administration, accountancy, business administration, law, education, engineering, criminology 
                    and law enforcement, architecture and fine arts, computer studies, maritime education and also technical courses.
                </Text>
                <Text style={styles.scrollBody}>
                    The various colleges and institutes have qualified, dedicated and competent faculty members and academic administrators who 
                    make education in the University excellence-driven, relevant, and adaptable to contemporary global needs.
                </Text>

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
    scrollText: {
        backgroundColor: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        padding: 20,
    },
    scrollBody: {
        padding: 20,
        color: 'black',
        textAlign: 'justify',
        fontSize: 15,

    },
    additionalImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      
    },

    icon: {
        width: 30,  // Adjust the width as needed
        height: 30, // Adjust the height as needed
        resizeMode: 'contain',
        marginTop: 8,
    },
});

export default Story;
