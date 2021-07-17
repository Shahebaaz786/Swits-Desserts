import React from 'react'
import { View, Text,StatusBar,Dimensions, Button,ImageBackground, StyleSheet} from 'react-native';

// import { useTheme } from '@react-navigation/native';
import All from './All';
class HomeScreen extends React.Component{
render(){
  // const { colors } = useTheme();
  // const theme = useTheme();

  
 
  return (
    <View style={styles.container} >
      {/* <StatusBar backgroundColor='teal' barStyle={ theme.dark ? "light-content" : "dark-content" }/> */}
      <StatusBar backgroundColor='teal' barStyle= "light-content" />

      {/* <View style={styles.header}>
            <ImageBackground  
              source={require("../Assets/Food/header.png")}
              style={styles.imageBackground}
              resizeMode="contain"
              >
              <Text style={styles.title}>Home</Text>
            </ImageBackground>      
      </View> */}

      <View>
          <All props={this.props} />
      </View>

    </View>
  );
}
}
export default HomeScreen;




const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container:
    {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    // header:
    // {
    //   marginTop:-433,
    //   marginLeft:-216,
    // },
    // tab_bar:
    // {
    //   flex:1,
    //   marginTop: width*0.3,
    //   paddingHorizontal:30
    // },
    // imageBackground: {
    //   width: width*0.2,
    //   height: width*0.2,
    //   alignItems:'center',

    // },
    
    // title: {
    //   color:'white',
    //   marginTop:25,
    //   fontWeight:'bold',
    //   fontSize:25
    // },
   
});