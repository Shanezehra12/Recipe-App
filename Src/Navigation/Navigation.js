import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screen/Splash";
import Recipe from "../Screen/Recipe";


const stack = createNativeStackNavigator();

const Navigation = () => {
    return <NavigationContainer>
        <stack.Navigator> 
        <stack.Screen options={{headerShown:false}} name="Splash" component={Splash}/>
        <stack.Screen options={{headerShown:false}} name="Recipe" component={Recipe}/>   
        </stack.Navigator>
    </NavigationContainer>;
};

export default Navigation;