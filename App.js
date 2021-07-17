import React , { useEffect } from 'react';
import { Text ,StatusBar, ImageBackground } from 'react-native';
import { 
  NavigationContainer, 
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
 } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';
import { DrawerContent } from './Screens/DrawerContent';
import { 
  Provider as PaperProvider, 
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
 } from 'react-native-paper';
import SupportScreen  from './Screens/SupportScreen';
import SettingsScreen  from './Screens/SettingsScreen';
import BookmarkScreen  from './Screens/BookmarkScreen';

import RootStackScreen from './Screens/RootStackScreen';
import { ActivityIndicator, View } from 'react-native';

import { AuthContext } from './Component/Context';
import * as Animate from 'react-native-animatable';

import AsyncStorage from '@react-native-community/async-storage';
const Drawer = createDrawerNavigator();

const App = () =>
{
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: 'lavenderblush',
      text: 'navy'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: 'lightcoral',
      text: 'deeppink'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(()=>({
    signIn: async(foundUser) => {
      // setUserToken("hjss");
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
        try
        {
          await AsyncStorage.setItem("userToken",userToken);
        }
        catch(e)
        {
          console.log(e);
        }
      
      dispatch({ type:'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try
        {
          await AsyncStorage.removeItem("userToken");
        }
        catch(e)
        {
          console.log(e);
        }
      dispatch({ type:'LOGOUT' });

    },
    signUp: () => {
      setUserToken("gfdf");
      setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }));

  useEffect(() => {
    setTimeout( async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
        try
        {
          userToken = await AsyncStorage.getItem("userToken");
        }
        catch(e)
        {
          console.log(e);
        }
      dispatch({ type:'REGISTER', token: userToken });
    },3500)
  },[]);

  if( loginState.isLoading )
  {
    return(
      <View style={{flex:1,borderWidth:3,borderBottomLeftRadius:16,borderBottomRightRadius:16,borderColor:'deeppink' ,justifyContent:'center', backgroundColor:'#009167', alignItems:'center'}}>
        <StatusBar backgroundColor='teal' barStyle="light-content"/>
        <Animate.Text animation="fadeInDownBig" duration={1500} style={{paddingTop:370, color:'blue', fontSize:30, textAlign:'center', justifyContent:'center' }}>Please wait for few minutes...! </Animate.Text>
        <ImageBackground
         source = { require("./Screens/Burz.jpg") }
         borderWidth={3}
         borderColor={'navy'}
         borderRadius={34}
         style = {{ marginLeft:67 ,marginTop:10,paddingTop:0, width:'70%',height:400}}
        >
        </ImageBackground>
        <View style={{flexDirection:'row'}}>
        <Animate.Text animation="lightSpeedIn" duration={2000} style={{color:'crimson',fontSize:20, fontWeight:'bold'}}>@App Build by : </Animate.Text>
        <Animate.Text animation="bounceIn" duration={10000} style={{color:'orangered',fontSize:22, fontWeight:'bold', fontStyle:'italic'}}>#Shahebaaz Inamdar</Animate.Text>
        </View>
        
        <ActivityIndicator style={{paddingBottom: 381 }} color='deeppink' size= {90} />
        

      </View>
    );
  }

  return(
    
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {loginState.userToken != null ? 
        
        ( <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} options={{ title:"Home" }} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        )
        :
        <RootStackScreen/>
        }

      </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}
export default App;