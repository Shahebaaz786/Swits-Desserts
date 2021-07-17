import React from 'react'
import { View, Text, Alert, TextInput, Button, Platform, TouchableOpacity,Dimensions,StatusBar, StyleSheet } from 'react-native';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import  Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'

import { AuthContext } from '../Component/Context';
import Users from '../Modal/Users';
import { useTheme } from 'react-native-paper';


import * as Animate from 'react-native-animatable';

const SignInScreen = ({navigation}) =>
{
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword:true,
      
    });

    const {colors} = useTheme();

    const { signIn } = React.useContext(AuthContext);
    
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true,
               
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
                
            });
        }
    }


    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        }
        else
        {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidPassword = (val) =>
    {
        if( val.trim().length >= 4 )
        {
            setData({
                ...data,
                isValidUser:true
            });
        }
        else
        {
            setData({
                ...data,
                isValidUser:false
            });  
        }
    }

    const loginHandle = (username,password) => 
    {
        const foundUser = Users.filter( item => {
            return username == item.username && password == item.password;
        });


        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'},{text: 'Cancel'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User ..!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }     
        signIn(foundUser);
    }

    return(
        <View style={styles.container}>
                <StatusBar backgroundColor='teal' barStyle="light-content"/>
            <View style={styles.header}>
                <Animate.Text animation="bounceIn" duration={2000} style={styles.text_header}>Welcome ..!</Animate.Text>
            </View>

            
            <Animate.View animation="fadeInUpBig" duration={1400} style={[styles.footer, {backgroundColor: colors.background }]}>
                <Text style={[styles.text_footer,{ color:colors.text}]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Username'
                        style={[styles.textInput,{color:colors.text}]}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing = {(e)=>handleValidPassword(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Feather
                        name="check-circle"
                        color='green'
                        size={20}
                    />
                    : null }
                </View>

                {data.isValidUser ? null :
                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                }
                <Text style={[styles.text_footer,{marginTop:35 , color:colors.text}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput,{color: colors.text}]}
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
                {data.isValidPassword ? null :
                <Text style={styles.errorMsg}>PassWord must be 8 characters long.</Text>
                }

                <TouchableOpacity>
                    <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity
                        
                        style={styles.signIn}
                        onPress={()=>{loginHandle(data.username, data.password)}}
                    >
                        <LinearGradient
                       
                            colors={['royalblue','violet','green']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign,{color:"slateblue"}]}>
                                Sign In
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                       
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: 'purple',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: 'purple'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animate.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"royalblue",
        borderLeftWidth:2,
        borderTopWidth:3,
        borderRightWidth:3,
        borderRadius:1,
        borderColor:'violet'
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
        paddingVertical: 30,
    },
    text_header: {
        color: 'hotpink',
        fontWeight: 'bold',
        fontSize: 40
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
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});