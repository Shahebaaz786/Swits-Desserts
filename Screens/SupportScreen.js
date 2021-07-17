import React from 'react'
import { View, Text, StatusBar, Button, StyleSheet } from 'react-native';
import * as Animate from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const SupportScreen = () =>
{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='teal' barStyle="light-content"/>
            <Animate.View animation="lightSpeedIn" duration={2000} >
            <Icon name='ios-paper-plane' color={'indigo'} size={80} style={{marginTop:40}}  />
            </Animate.View>
            <View style={{flexDirection:'column',alignItems:'center',marginTop:-2}}>
            <Animate.Text animation="bounceIn" duration={1500} style={{fontSize:65,color:'brown',marginBottom:-20}}>***</Animate.Text>   
            <Animate.Text animation="flipInY" duration={1500} style={{fontSize:35,color:'dodgerblue'}}> Thanks for </Animate.Text>   
            <Animate.Text animation="flipInX" duration={1500} style={{fontSize:30,color:'slateblue'}}> Review this Application </Animate.Text>   

            </View>
            <Animate.View animation="bounceIn" duration={2500}  >
            <Icon name='heart' color={'red'} size={230}  />
            </Animate.View>
            <Animate.View animation="swing" duration={2000} >
            <Icon name='ribbon' color={'magenta'} size={150} style={{marginBottom:-10}} />
            </Animate.View>
            <Text style={{fontSize:31,fontWeight:'bold',color:'indigo',marginBottom:15}}>..........................</Text>
        </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:4,
        borderColor:'green',
        borderRadius:30,
        marginLeft:10,
        marginTop:10,
        marginBottom:20,
        marginRight:10,
        backgroundColor:'plum'
    }
});