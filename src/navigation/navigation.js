import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Splash from '../halaman/splash';
import SignIn from '../halaman/login';
import SignUp from '../halaman/register';
import Home from '../halaman/home';


const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn"
                screenOptions={{
                    headerShown: false,
                    animationEnabled: false,
                }}>
                {/* <Stack.Screen name="Splash" component={Splash} /> */}
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;