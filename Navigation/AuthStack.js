import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator >

            {/* <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} /> */}
            <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name='Registration' options={{ title: 'Sign Up' }} component={SignUp} />

        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})