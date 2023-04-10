import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from '../Context/UserContext'

const Nav = () => {

    const {userInfo } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <AuthStack />
            {/* <AppStack/> */}
        </NavigationContainer>
    )
}

export default Nav