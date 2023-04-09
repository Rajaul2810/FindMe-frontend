import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../Constant/colors';
import { AntDesign,MaterialIcons, Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Profile from '../Components/Profile';
import Scan from '../Components/Scan';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Components/Home';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    backgroundColor: COLORS.bg,
                    borderRadius:10,
                    height: 70,
                    elevation: 5,
                    shadowColor: COLORS.shadows,
                    margin:10
                }
            }}
        >
            <Tab.Screen name="Home2" options={{
                title: "Home",
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabStyle}>
                        <Feather style={styles.icon} name="home" size={25} color={focused ? COLORS.main : COLORS.txt} />
                        <Text style={{ color: focused ? COLORS.main : COLORS.txt, fontSize: 12, }}>Home</Text>
                    </View>
                ),
            }} component={Home}

            />
            
            <Tab.Screen name="Scan" component={Scan}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabStyle2}>
                            <MaterialIcons style={styles.icon2} name="qr-code-scanner" size={40} color={focused ? "#000000" : "#FFFFFF"} />
                            <Text style={{ color: focused ? COLORS.main : COLORS.txt, fontSize: 15, }}>Scan</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabStyle}>
                            <FontAwesome5 style={styles.icon} name="user-tie" size={25} color={focused ? COLORS.main : COLORS.txt} />
                            <Text style={{ color: focused ? COLORS.main : COLORS.txt, fontSize: 12, }}>Profile</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    icon: {
        elevation: 5,
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: COLORS.bg,
        shadowColor: COLORS.shadows,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        alignItems: 'center',
        marginBottom:2,
    },
    icon2: {
        elevation: 5,
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor:'crimson',
        shadowColor: COLORS.shadows,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        alignItems: 'center',
        marginBottom:-2,
    },
    tabStyle: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    tabStyle2: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:-10
    },
    tabText: {
        fontSize: 10,
    }
})