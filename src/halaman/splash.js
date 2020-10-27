import React from 'react'
import { Text, View } from 'react-native'

export default class Splash extends React.Component {

    render() {
        setTimeout(() => {
            this.props.navigation.replace('Login')
        },5000);
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor: '#1a7cf4'}}>
                
                <Text style={{fontWeight:'bold',fontSize:30}}> Login Register </Text>
                
            </View>
        )
    }
}
