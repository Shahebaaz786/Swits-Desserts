// @refresh reset
import React , { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity ,Button, StatusBar, StyleSheet, YellowBox, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';  // All UI of chat is Here...
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animate from 'react-native-animatable';

const firebaseConfig = {
    apiKey: "AIzaSyBIXl6HMHXPDCyexDyF_QmuXVxJM37sVek",
    authDomain: "react-native-chat-b8d37.firebaseapp.com",
    databaseURL: "https://react-native-chat-b8d37-default-rtdb.firebaseio.com/",
    projectId: "react-native-chat-b8d37",
    storageBucket: "react-native-chat-b8d37.appspot.com",
    messagingSenderId: "505176228228",
    appId: "1:505176228228:web:9de79c4ca3a62cf2011dd1"
  };
  // Initialize Firebase

  if(firebase.apps.length == 0)
  {
    firebase.initializeApp(firebaseConfig);
  }
  

YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats');

const ExploreScreen = ({navigation}) =>
{
    const [user,setUser] = useState(null);
    const [name,setName] = useState('');
    const [messages,setMessages] = useState([]);
    useEffect(() => {
        readUser();
        const unsubscribe = chatsRef.onSnapshot(querySnapshot => 
            {
                const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type == 'added')
                .map(({ doc }) => 
                {
                    const message = doc.data()
                    return { ...message, createdAt: message.createdAt.toDate() }
                }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())
                
                appendMessages(messagesFirestore);
            })
            return () => unsubscribe();
    }, [] );
    
    const appendMessages = useCallback((messages) => 
    {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    }, [messages] )

    async function readUser() 
    {
        const user = await AsyncStorage.getItem('user');
        if (user) 
        {
            setUser(JSON.parse(user));
        }
    }

    async function handlePress() 
    {
        const _id = Math.random().toString(36).substring(7);
        const user = { _id, name }
        await AsyncStorage.setItem('user',JSON.stringify(user))
        setUser(user);
    }

    async function handleSend(messages) 
    {
        const writes = messages.map(m => chatsRef.add(m))
        await Promise.all(writes);
    }

    if (!user) 
    {
        return (
            <View style={styles.container}>
                <Animate.View animation="bounceIn" duration={3000} >
                    <Text style={{fontSize:26, color:'red', fontWeight:'bold' }}>Let's Chat with</Text>
                    <Text style={{fontSize:26, color:'red',marginLeft:7 , fontWeight:'bold'}}> Shahebaaz ...</Text>
                </Animate.View>

                <Animate.View animation="flipInX" duration={3300} >
                    <Icon name="wechat" color={'chats'} size={200} />
                </Animate.View>
                <TextInput style={[styles.input,{borderRadius:34, paddingLeft:55, fontStyle:'italic',fontWeight:'bold',fontSize:19}]}  placeholderTextColor='violet' placeholder="Enter Your Name" value={name} onChangeText={setName} />
                <TouchableOpacity
                        
                        style={styles.signIn}
                        onPress={handlePress}
                    >
                        <LinearGradient
                       
                            colors={['gold','lightseagreen','indigo']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign,{color:"navy"}]}>
                                Enter in Chat ...
                            </Text>
                        </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }

    return( <GiftedChat messages={messages} user={user} onSend={ handleSend } />  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:30,
        borderWidth:3,
        margin:30,
        borderRadius:18,
        borderColor:'magenta',
        backgroundColor:'slateblue'
    },
    input:
    {
      height: 50,
      width: '100%',
      borderWidth: 1 ,
      padding: 15,
      borderColor: 'green' ,
      marginBottom:20,
      borderColor:'pink'
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
});