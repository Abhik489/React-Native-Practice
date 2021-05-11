import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text,View } from 'react-native';

const Contact = () =>{
    return (
        <View>
            <Text>Hi from contact</Text>
        </View>
    );
}

const CreateContact = () =>{
    return (
        <View>
            <Text>Hi from create-contact</Text>
        </View>
    );
}

const ContactDetails = () =>{
    return (
        <View>
            <Text>Hi from setting</Text>
        </View>
    );
}


const Setting = () =>{
    return (
        <View>
            <Text>Hi from setting</Text>
        </View>
    );
}

const HomeStack = createStackNavigator();

const HomeNavigator = () =>{

    const HomeStack = cre
    return (
        <HomeStack.Navigator>
           <HomeStack.Screen name = "Contact" component = {Contact} ></HomeStack.Screen>
           <HomeStack.Screen name = "CreateContact" component = {CreateContact} ></HomeStack.Screen>
           <HomeStack.Screen name = "Setting" component = {Setting} ></HomeStack.Screen>
           <HomeStack.Screen name = "ContactDetails" component = {ContactDetails} ></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

// screens -> Home -> drawer
// screen -> Auth ->

export default HomeNavigator;