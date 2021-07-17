import React from 'react'
import { View,  FlatList ,Image,ImageBackground,TouchableOpacity,TextInput,Text,Dimensions, StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
var data = [
  {
      name:'Stewed Mushrooms',
      image: require("../Assets/Food/namkho.jpg"),
      rating: 3,
      price: "$12"
  }, 
  {
    name:'Stewed Mushrooms',
    image: require("../Assets/Food/namkho.jpg"),
    rating: 3,
    price: "$12"
},
{
    name:'Stewed Mushrooms',
    image: require("../Assets/Food/namkho.jpg"),
    rating: 3,
    price: "$12"
},
  {
      name:'Jackfruit Fried',
      image: require("../Assets/Food/mitkho.jpg"),
      rating: 5,
      price: "$15"
  },
  {
      name:'Noodles',
      image: require("../Assets/Food/hutieu.jpg"),
      rating: 4,
      price: "$20"
  },
  {
      name:'Beef',
      image: require("../Assets/Food/cuonlalot.jpg"),
      rating: 2,
      price: "$12"
  },
  {
      name:'Salad dressing',
      image: require("../Assets/Food/cuondiep.jpg"),
      rating: 5,
      price: "$13"
  },
];
export default class All extends React.Component{
    constructor(props){
        super(props);
        this.state={
          data:data,
          data_temp: data,
          search: ''
        }
      }


  _rating(item){
    let rating = [];
    for(let i=0;i<item;i++){
      rating.push(
        <Image 
          source={require("../Assets/Food/star.png")}
          style={{width:15, height:15, marginRight:3}}
          resizeMode="cover"
        />
      )
    }
    return rating;
}


      renderItem = ({item}) => {
        return(
            <LinearGradient 
            colors={['#009245', '#8cc631','#542']}
            start={{x:0, y:1}} end={{x:1, y:0}}
            style={styles.item}
            >
              <View style={styles.image_container}>
                  <Image 
                    source={item.image}
                    style={styles.image}
                  />
              </View>
              <View style={styles.content}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.rating}>
                    {this._rating(item.rating)}
                  </View>
                  <View style={styles.price_container}>
                      <View style={styles.price}>
                          <Text style={styles.textPrice}>{item.price}</Text>
                      </View>
                  </View>
              </View>
              <TouchableOpacity 
              onPress={() => this.props.props.navigation.navigate("SettingsScreen",{
                image: item.image,
                price: item.price,
                name: item.name
              })}
              style={styles.button}>
                  <AntDesign 
                    name="arrowright"
                    color="green"
                    size={15}
                  />
              </TouchableOpacity>
    
            </LinearGradient>
        )
      }


      ItemSeparatorComponent = () => {
        return(
          <View 
            style={{
              height:10
            }}
          />
        )
      }
    

  _search(text){
    let data = [];
    this.state.data_temp.map(function(value){
      if(value.name.indexOf(text) > -1){
        data.push(value);
      }
    });
    this.setState({
      data:data,
      search:text
    });
}


    render(){
         return(
            <View style={styles.container}>
                <View style={[styles.header,{flexDirection:'row'}]}>
                    <ImageBackground  
                    source={require("../Assets/Food/header.png")}
                    style={styles.imageBackground}
                    resizeMode="contain"
                    >
                    <Text style={styles.title}>Home</Text>
                    </ImageBackground>   
                    <Text style={styles.txt}>** Order Suit's</Text>  
                    <Text style={styles.txt1}>You can order Suit's here ..!</Text>  
                </View>

                <View style={[styles.section, {backgroundColor:'darkgrey'}]}>
                  <TextInput 
                    placeholder="Search.."
                    style={{ flex:1, marginLeft:10,fontSize:18,fontWeight:'bold',fontFamily:'algerian',color:"green"}}
                    value={this.state.search}
                    placeholderTextColor='lime'
                    onChangeText={(text)=>this._search(text)}
                  />
                    <TouchableOpacity
                    onPress={()=>this._search("")}
                    style={{paddingHorizontal:10}}>
                      <Ionicons 
                        name="ios-close"
                        color="hotpink"
                        size={20}
                      />
                    </TouchableOpacity>
                </View>

                <View style={styles.flatList}>
                <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index)=>index.toString()}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                showsVerticalScrollIndicator={false}
               />
                </View>
            </View>
        )
    }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
    container: {
      flex:1,
      marginLeft:-178,
      marginRight:-178,
      marginTop:20,
      marginBottom:1,
   

    },
    flatList: {
        flex:1,
        marginTop:-5,
        paddingLeft:10,
        paddingRight:10,
        
    },
    header:
    {
      marginTop:-31,
      marginLeft:-2,
    },
    imageBackground: {
      width: width*0.4,
      height: width*0.4,
      alignItems:'center',

    },
    txt:
    {
        paddingTop:29,
        fontSize:30,
        paddingLeft: 28,
        color: 'red',
        fontWeight:'bold',
       
    },
   txt1:
   {
    marginLeft:-273,
    paddingTop:82,
    fontWeight:'bold',
    fontSize:22,
    color:'purple',
   },
    title: {
      color:'white',
      marginTop:25,
      fontWeight:'bold',
      fontSize:25
    },
    item: {
        flex:1,
        paddingVertical:15,
        paddingHorizontal:15,
        flexDirection:'row',
        borderRadius:10
      },
      image_container: {
        width: 90,
        height: 90
      },
      image: {
        width:'100%',
        height:'100%',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10
      },
      content: {
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10
      },
      name: {
        color:'white',
        fontWeight:'bold',
        fontSize:18
      },
      rating: {
        marginTop:5,
        flexDirection:'row'
      },
      button: {
        width:30,
        height:30,
        backgroundColor:'white',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
      },
      price_container: {
        flexDirection:'row',
        marginTop:10
      },
      price: {
        backgroundColor:'white',
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:50
      },
      textPrice: {
        color:'green',
        fontWeight:'bold'
      },
      section: {
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:-4,
        paddingHorizontal:15,
        borderRadius:100,
        backgroundColor:'#f2f2f2',
        marginTop:-20,
        marginBottom:9,
        marginLeft:12,
        marginRight:12,
        
      }
});