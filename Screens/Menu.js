import React from 'react'
import { View, Text, Button,StatusBar, FlatList, Image, TouchableOpacity,StyleSheet} from 'react-native';

export default class Menu extends React.Component{

  constructor(props){
    super(props);
    this.state={
      data:[
        {
            type: 'Dessert',
            color: '#f7931e',
            data:[
                {
                    name:'Stewed Mushrooms',
                    image: require("../Assets/Food/namkho.jpg"),
                    price: "$12"
                },
                {
                    name:'Jackfruit Fried',
                    image: require("../Assets/Food/mitkho.jpg"),
                    price: "$15"
                }
            ]
        },
        {
          type: 'Sweets types',
          color: '#0097',
          data:[
              {
                  name:'Noodles',
                  image: require("../Assets/Food/hutieu.jpg"),
                  rating: 4,
                  price: "$20"
              },
              {
                name:'Stewed Mushrooms',
                image: require("../Assets/Food/namkho.jpg"),
                price: "$12"
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
          ]
      },
      
        {
            type: 'Main course',
            color: '#39b54a',
            data:[
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
            ]
        },
        
        {
            type: 'Other',
            color: '#ed1e79',
            data:[
                {
                    name:'Salad dressing',
                    image: require("../Assets/Food/cuondiep.jpg"),
                    price: "$13"
                },
                {
                    name:'Jackfruit warehouse',
                    image: require("../Assets/Food/mitkho.jpg"),
                    price: "$15"
                }
            ]
        },
    ]
    }
  }

  renderItem_type = ({item}) => {
    return(
        <TouchableOpacity 
        onPress={()=>this.props.props.navigation.navigate("SettingsScreen",{
          image: item.image,
          price: item.price,
          name: item.name
        })}
        style={styles.item_type}>
            <Image 
              source={item.image}
              style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>

    )
  }

  renderItem = ({item}) => {
    return(
      <View style={{flex:1}}>
          <Text style={[styles.type,{
            color: item.color
          }]}>{item.type}</Text>
          <View style={[styles.item,{
            backgroundColor:item.color
          }]}>
              <FlatList 
                data={item.data}
                renderItem={this.renderItem_type}
                keyExtractor={(item,index)=>index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.ItemSeparatorComponent_type}
              />
          </View>
      </View>
    )
  }

  ItemSeparatorComponent_type = () => {
    return(
      <View 
        style={{width:10}}
      />
    )
  }
  
  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{height:20}}
      />
    )
  }
  render(){
    return(
          <View style={styles.container}>
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
              />
          </View>
    );
  };
};

const styles = StyleSheet.create({
    container:
    {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
        borderWidth:3,
        paddingLeft:24,
        paddingRight:24,
        paddingTop:14,
        paddingBottom:8,
        borderColor:'darkcyan',
        borderRadius:10,
        marginLeft:2,
        marginRight:2,
    },
    type: {
      fontSize:18,
      fontWeight:'bold'
    },
    item: {
      marginTop:10,
      flexDirection:'row',
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius:10
    },
    item_type: {
      flex:1,
      alignItems:'center'
    },
    image:{
      width:80,
      height:80,
      borderRadius:40,
      borderWidth:2,
      borderColor:'white',
    },
    name: {
      marginTop:10,
      color:'white',
      fontSize:15,
    }
});