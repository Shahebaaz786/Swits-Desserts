import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import HomeScreen from "./HomeScreen";
import HomeScreen from './HomeScreen';
import {NavigationAction, NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
class Set extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" Component={Homes}>

                </Stack.Screen>

                <Stack.Screen name="Settings" Component={SettingsScreen}>

</Stack.Screen>
</Stack.Navigator>
            </NavigationContainer>

        )
    }
}
class Homes extends React.Component{
    render(){
        return(
        <View>
            <HomeScreen/>
        </View>
        );
    }
}
class SettingsScreen extends React.Component{
 
    render(){
      return(
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <ImageBackground
            source={require("../Assets/Food/header_detail.png")}
            style={{flex:1, alignItems:'center'}}
            resizeMode={"stretch"}
          >
           {/* <View style={styles.image_container}>
                <Image 
                  source={this.props.navigation.state.params.image}
                  style={styles.image}
                />
            </View> */}
            <View style={styles.back}>
                <Ionicons 
                  name="return-up-back-outline"
                  color="white"
                  size={35}
                  onPress={()=>this.props.navigation.goBack()}
                />
            </View>
          </ImageBackground>
          <ScrollView style={styles.footer}>
              <View style={styles.status}>
                  <Text style={{color:'green'}}>AVALIABLE</Text>
              </View>
             {/* <Text style={styles.textPrice}>{this.props.navigation.state.params.price}</Text>
              <Text numberOfLines={2} style={styles.textName}>{this.props.navigation.state.params.name.toUpperCase()}</Text>
              */}
             <Text  style={styles.textDetail}>The template details auto text code displays the complete template details, including attribute details and metric details.</Text>
              <LinearGradient
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 0}} 
              colors={['#009245','gold', '#8cc631']}
              style={styles.button}
              >
                <Text style={styles.textOrder}>Order Now</Text>
              </LinearGradient> 
          </ScrollView>
        </View>
      )
    }
  }
  
  const height = Dimensions.get("screen").height;
  const height_image = height * 0.5 * 0.5;
  
  var styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white'
    },
    footer: {
      flex:1,
      paddingHorizontal:40
    },
    image_container: {
      width: height_image,
      height: height_image,
      marginTop: height_image/3
    },
    image: {
      width:'80%',
      height:'80%',
      borderWidth:5,
      marginLeft:19,
      borderColor:'white',
      borderRadius: height_image/2
    },
    back:{
      position:'absolute',
      left:0,
      marginTop:30,
      marginLeft:15
    },
    status: {
      width:100,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderRadius:50,
      paddingVertical:3,
      borderColor:'green',
    },
    textPrice: {
      color:'green',
      fontWeight:'bold',
      fontSize:30,
      marginTop:20
    },
    textName: {
      color: '#3e3c3e',
      fontWeight:'bold',
      fontSize:45,
      marginTop:5
    },
    textDetail: {
      color:'gray',
      marginTop:10
    },
    button: {
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
      paddingVertical:10,
      borderRadius:100
    },
    textOrder: {
      color:'white',
      fontWeight:'bold',
      fontSize:18
    }
  });

  export default Set;