import React from 'react'

import { View, StyleSheet,StatusBar, ImageBackground, Image} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
}   from '@react-navigation/drawer';
import
{
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
}   from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../Component/Context';

export  function DrawerContent(props)
{
    const paperTheme = useTheme();

    const { signOut , toggleTheme} = React.useContext(AuthContext);

    return(
        <View style={{flex:1, borderWidth:3, borderColor:'brown'}}>
                        <StatusBar backgroundColor='teal' barStyle="light-content"/>

            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <ImageBackground
                        source = { require("./Background.jpg") }
                        style = {{ width:undefined, paddingBottom:10 , paddingTop:75 }}
                    >
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection:'row' }}>
                                {/* <Avatar.Image 
                                    source={{
                                        url: ''
                                    }}
                                    size={50}
                                /> */}
                                <Image source={require("../Assets/Food/avatar1.png")} style={{width:80, height:80, borderWidth:1, borderRadius:40, borderColor:"#fae"}} />
                                    
                                <View style={{marginLeft:15, flexDirection:'column'}}>
                                    <Title style={styles.title}>Shahebaaz Inamdar</Title>
                                    <Caption style={styles.caption}>@Shahebaaz_Sn</Caption>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph,styles.caption]}>786</Paragraph>
                                    <Caption style={styles.caption}>Following's</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph,styles.caption]}>92786</Paragraph>
                                    <Caption style={styles.caption}>Follower's</Caption>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                   
                    <View style={{flex:1, backgroundColor:'pink', borderTopWidth:3, borderColor:'dodgerblue'}} >
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color,size}) => (
                                    <Icon name="home-outline" color={'red'} size={size} />
                                )}

                                label="Suit's Desserts"
                                onPress={() => {props.navigation.navigate('Home')}}
                            />

                            <DrawerItem 
                                icon={({color,size}) => (
                                    <Icon name="bookmark-outline" color={'green'} size={size} />
                                )}

                                label="Suit's System"
                                onPress={() => {props.navigation.navigate('Profile')}}
                            />

                            {/* <DrawerItem 
                                icon={({color,size}) => (
                                    <Icon name="bookmark-outline" color={'blueviolet'} size={size} />
                                )}

                                label="Bookmark's"
                                onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                            /> */}
                            <DrawerItem 
                                icon={({color,size}) => (
                                    <Icon name="account-check-outline" color={'blueviolet'} size={size} />
                                )}

                                label="Review's"
                                onPress={() => {props.navigation.navigate('Profile')}}
                            />
                            {/* <DrawerItem 
                                icon={({color,size}) => (
                                    <Icon name="cog-outline" color={'chocolate'} size={size} />
                                )}

                                label="Settings"
                                onPress={() => {props.navigation.navigate('SettingsScreen')}}
                            /> */}
                            <DrawerItem 
                                icon={({color,size}) => (
                                <Icon name="wechat" color={'chocolate'} size={size} />
                                )}

                                label="Chat With Us"
                                onPress={() => {props.navigation.navigate('Explore')}}
                            />

                            <DrawerItem 
                                icon={({color,size}) => (
                                    <Icon name="gift" color={'teal'} size={size} />
                                )}

                                label="Celebrate"
                                onPress={() => {props.navigation.navigate('SupportScreen')}}
                            />

                        </Drawer.Section>
                        <Drawer.Section title="Preferences"> 
                            <TouchableRipple onPress={()=>{toggleTheme();}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents='none'>                                  
                                        <Switch value={paperTheme.dark} />
                                    </View>
                                    
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={{backgroundColor:'sandybrown', borderTopWidth:3, borderColor:'darkgreen'}}>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color,size}) => (
                            <Icon name="exit-to-app" color={'deeppink'} size={30} />
                        )}

                        label="Sign Out"
                        onPress={() => {signOut()}}
                    />
                </Drawer.Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:
    {
        flex:1,
        marginTop:-4,
    },
    userInfoSection:
    {
        paddingLeft: 20,
    },
    title:
    {
        fontSize: 19,
        marginTop: 3,
        fontWeight: 'bold',
        color:'hotpink',
        letterSpacing:0,


    },
    caption:
    {
        fontSize: 14,
        lineHeight: 14,
        color:'lime',
    },
    row:
    {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section:
    {
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:
    {
        fontWeight:'bold',
        marginRight: 3,
    },
    drawerSection:
    {
        marginTop:17,        
    },
    bottomDrawerSection:
    {
        marginBottom:15,
        borderTopColor: '#34ae42',
        borderTopWidth: 1,

    },
    preference:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});