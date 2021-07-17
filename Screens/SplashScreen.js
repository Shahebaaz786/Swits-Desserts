import React from 'react'
import { View, Text, Button, TouchableOpacity,Dimensions ,StyleSheet, StatusBar, Image } from 'react-native';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '@react-navigation/native';
import * as Animate from 'react-native-animatable';


const SplashScreen = ({navigation}) =>
{
    const {colors} = useTheme();
    
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='teal' barStyle="light-content"/>
            <Animate.View animation="flipInX" duration={1500} style={styles.header}>
                <Image 
               
                source={require('../Assets/Back.png')}
                style={styles.logo} 
                resizeMode='stretch'
                />
            </Animate.View>
            <Animate.View animation="fadeInDownBig" duration={1500}  style={[styles.footer, { backgroundColor: colors.background }]} >
                <Animate.Text animation="flipInY" duration={2750} style={[styles.title, { color: colors.text}]}>Stay connected with everyone...!!</Animate.Text>
                <Animate.Text animation="flipInX" duration={2800} style={styles.text}>Sign in with account</Animate.Text>
                <Animate.View animation="fadeInRight" duration={2800} style={styles.button}>  
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignInScreen')}}>
                        <LinearGradient
                            colors={['gold','green','tan','purple']}
                            style={styles.signIn}
                        >
                            <Text style={{color:'indigo', fontWeight:'bold'}}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="mediumblue"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </Animate.View>
            </Animate.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.34;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'indigo',
        borderLeftWidth:2,
        borderTopWidth:3,
        borderRightWidth:3,
        borderRadius:1,
        borderColor:'darkmagenta'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
     
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        width:'100%',
        height:'100%',
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderWidth:1, 
        borderRadius:90,
        
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'indigo',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});