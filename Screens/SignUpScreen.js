import React from 'react'
import { View, Text, TextInput, Button, Platform, TouchableOpacity,Dimensions, StatusBar, StyleSheet } from 'react-native';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import  Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from 'react-native-paper';
import * as Animate from 'react-native-animatable';

const SignUpScreen = ({navigation}) =>
{
    const {colors} = useTheme();

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,

            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }


  
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    return(
        <View style={styles.container}>
                <StatusBar backgroundColor='teal' barStyle="light-content"/>
            <View style={styles.header}>
                <Animate.Text animation="bounceInDown" duration={2000} style={styles.text_header}>Register Now</Animate.Text>
            </View>
            <Animate.View animation="fadeInUpBig" duration={1500} style={[styles.footer,{backgroundColor: colors.background} ]}>
                <Text style={[styles.text_footer,{color:colors.text}]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={[styles.textInput,{color:colors.text}]}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Feather
                        name="check-circle"
                        color='green'
                        size={20}
                    />
                    : null }
                </View>
                <Text style={[styles.text_footer,{marginTop:5, color:colors.text}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput,{color:colors.text}]}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                    {data.secureTextEntry ? 
                    <Feather
                        name="eye-off"
                        color='green'
                        size={20}
                    />
                    :
                    <Feather
                        name="eye"
                        color='green'
                        size={20}
                    />
                    }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 5, color:colors.text
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput 
                        placeholder="Confirm Your Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={[styles.textInput,{color:colors.text}]}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="green"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="green"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <View style={[styles.textPrivate,{marginTop:2,color:colors.text}]}>
                    <Text style={styles.color_textPrivate}>
                       *** By signing up you agree to our
                    </Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                    <Text style={styles.color_textPrivate}>{" "}and</Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                </View>

                <View style={[styles.button,{marginTop:9}]}>
                    <LinearGradient 
                        colors={['violet','royalblue','magenta']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign,{color:"plum"}]}>
                            Sign Up
                        </Text>
                    </LinearGradient>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: 'mediumpurple',
                        borderWidth: 2,
                        marginTop: 10
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'blueviolet'
                    }]}>Sign In</Text>
                </TouchableOpacity>
                </View>
            </Animate.View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"darkmagenta",
        borderLeftWidth:2,
        borderTopWidth:3,
        borderRightWidth:3,
        borderRadius:1,
        borderColor:'blue'
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: 'navy',
        fontWeight: 'bold',
        fontSize: 38
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});