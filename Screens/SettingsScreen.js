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
import * as Animate from 'react-native-animatable';

export default class SettingsScreen extends React.Component{
 
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
          <View style={[styles.image_container]}>
              <Image 
                source= { require("../Assets/Food/namkho.jpg") }
                style={[styles.image]}
              />
          </View> 
          <Animate.Text animation="bounceIn" duration={1800} style={{marginTop:-225 ,paddingLeft:49 ,fontSize:29,fontStyle:'italic',fontWeight:'bold',color:'red'}}>Suit's Order Here ...! </Animate.Text>

          <View style={styles.back}>
              <Ionicons 
                name="return-up-back-outline"
                color="gold"
                size={35}
                onPress={()=>this.props.navigation.goBack()}
              />

          </View>
        </ImageBackground>
        <ScrollView style={styles.footer}>
            <View style={styles.status}>
                <Text style={{color:'darkcyan',fontWeight:'bold'}}>AVALIABLE</Text>
            </View>
           {/* <Text style={styles.textPrice}>{this.props.navigation.state.params.price}</Text>
            <Text numberOfLines={2} style={styles.textName}>{this.props.navigation.state.params.name.toUpperCase()}</Text>
            */}
            <Animate.Text animation="bounceIn" duration={1500} style={styles.textPrice}>$ 20</Animate.Text>
            <Animate.Text animation="flipInY" duration={2000} numberOfLines={2} style={styles.textName}>Salad Suits</Animate.Text>
            
           <Text  style={styles.textDetail}>There are some various types of Sweet's  desserts are available.. You can see and Order here ..!</Text>
            <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['brown','gold', 'aqua','orangered']}
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
    width:'90%',
    height:'90%',
    borderWidth:5,
    marginLeft:15,
    borderColor:'violet',
    borderRadius: height_image/2
  },
  back:{
    position:'absolute',
    left:0,
    marginTop:10,
    marginLeft:15
  },
  status: {
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:50,
    paddingVertical:5,
    fontSize:12,
    borderColor:'green',
  },
  textPrice: {
    color:'purple',
    fontWeight:'bold',
    fontSize:30,
    marginTop:20
  },
  textName: {
    color: 'navy',
    fontWeight:'bold',
    fontSize:45,
    marginTop:5
  },
  textDetail: {
    color:'blueviolet',
    fontSize:14,
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
    color:'indigo',
    fontWeight:'bold',
    fontSize:18
  }
});