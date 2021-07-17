import React from 'react'
import { View, Text, Button,StatusBar, StyleSheet} from 'react-native';
import Menu from './Menu';


// const DetailsScreen = ({navigation}) =>
// {
//   return (
//     <View style={styles.container} >
//       <StatusBar backgroundColor='teal' barStyle= "light-content" />

//       <Text>Details Screen</Text>
//       <Button title="Go to details screen... again"  onPress={() => navigation.push("Details")} />
//       <Button title="Go to home"  onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back"  onPress={() => navigation.goBack()} />
//       <Button title="Go to first screen"  onPress={() => navigation.popToTop()} />

//     </View>
//   );
// }

class DetailsScreen extends React.Component{
  render(){
    return(
          <View style={styles.container}>
            <Menu props={this.props} />
          </View>
    );
  }
}
export default DetailsScreen;

const styles = StyleSheet.create({
    container:
    {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    }
});