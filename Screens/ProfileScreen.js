import React from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import * as Animate from 'react-native-animatable';

// const ProfileScreen = () =>
// {
//     return(
//         <View style={styles.container}>
//                         <StatusBar backgroundColor='teal' barStyle="light-content"/>
//             <Text>Profile Screen</Text>
//             <Button title="Click Here..." onPress={()=>{alert('Button Clicked...')}} />
//         </View>
//     );
// };


class ProfileScreen extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
          data: [
            {
                name: 'Alex Sander',
                rating: 5,
                comment: 'Good',
                image: require("../Assets/Food/avatar1.png")
            },
            {
                name: 'Trong Thanh',
                rating: 4,
                comment: 'Okay',
                image: require("../Assets/Food/avatar2.png")
            },
            {
                name: 'Huynh Nhu',
                rating: 2,
                comment: 'Wow',
                image: require("../Assets/Food/avatar3.png")
            },
            {
                name: 'Trong That',
                rating: 5,
                comment: "Awesome Suit's",
                image: require("../Assets/Food/avatar4.png")
            },
            {
                name: 'Ngoc Trai',
                rating: 4,
                comment: 'Very Fantastic',
                image: require("../Assets/Food/avatar2.png")
            },
            {
                name: 'Hai Bang',
                rating: 2,
                comment: 'Nice',
                image: require("../Assets/Food/avatar4.png")
            }
        ]
        }
      }
    

  _rating(item){
    let rating = [];
    for(i=0;i<item;i++){
      rating.push(
        
        <Image 
          source={require("../Assets/Food/star2.png")}
          style={{width:15, height:15, marginRight:3}}
          resizeMode="cover"
        />
      )
    }
    return rating;
  }

  renderItem = ({item}) => {
    return(

      <View style={styles.item}>
          {/* <StatusBar barStyle="light-content" backgroundColor="red" /> */}
          <Image 
            source={item.image}
            style={styles.image}
          />
          <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
          <View style={{flexDirection:'row'}}>
            {this._rating(item.rating)}
          </View>
          <Text numberOfLines={2}
          style={styles.comment}
          >"{item.comment}"</Text>
      </View>
    )
  }

  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{height:30}}
      />
    )
  }

    render(){
        return(
            <View style={styles.container}>
                  <LinearGradient  
                       colors={['royalblue','violet','green']}
                       style={[styles.signIn]}
                   >      
                   <Animate.Text animation="flipInX" duration={1300} style={{fontSize:28,color:"violet",fontWeight:'bold',fontStyle:'italic',paddingTop:134}}>
                    Suit's Review's are here ..!
                   </Animate.Text>
                  

                </LinearGradient>
                
                <FlatList 
                
                    data={this.state.data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                    keyExtractor={(item,index)=>index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                />
            
            </View>
        );
    }
}


export default ProfileScreen;

var styles = StyleSheet.create({
    container: 
    {
        flex:1,
        marginTop:20,
        marginTop:10,
        marginBottom:10,
        borderWidth:3,
        paddingLeft:24,
        paddingRight:24,
        paddingTop:124,
        paddingBottom:8,
        borderColor:'darkcyan',
        borderRadius:10,
        marginLeft:2,
        marginRight:2,
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop:-90,
      marginBottom:90
  },
    item: {
        flex:1,
        alignItems:'center'
      },
      image: {
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'green'
      },
      name: {
        color:'green',
        fontWeight:'bold',
      },
      comment:{
        fontStyle:'italic',
        marginTop:5,
      }
});