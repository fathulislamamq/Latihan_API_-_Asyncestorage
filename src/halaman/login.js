import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import AsynStorage from '@react-native-async-storage/async-storage';

export default class SignIn extends Component {
  login = () => {
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        email: 'rais@gmail.com',
        password: '12345678',
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
          AsynStorage.setItem("token",resJson.token).catch((err)=>console.log(err))
          this.props.navigation.replace('Home')
        } else {
          alert('error');
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  // state = {
  //   email: '',
  //   password: '',
  // };
  // simpadta(){
  //   let newData = {
  //     email:this.state.email,
  //     password:this.state.password,
      
  //   }
  //   AsynStorage.setItem("dataEmail",JSON.stringify(newData))
  // .then((res) => res.json())
  // .then((resJson) => {
  //   console.log(resJson);
  //   if (resJson.token) {
  //     // AsynStorage.setItem("token",resJson.token).catch((err)=>console.log(err))
  //     this.props.navigation.replace('Home', {
  //       token: resJson.token,
  //     });
  //   } else {
  //     alert('error');
  //   }
  // })
  //   .catch((err)=>console.log(err))
  // }  
  // ambildta(){
  //   AsynStorage.getItem("dataEmail").then((respon)=>{
  //     console.log(respon);
  //     let hasil = JSON.parse(respon)
  //     console.log(hasil);
  //     this.setState({
  //       email:hasil.email,
  //       password:hasil.password,
  //     })
  //   })
  //   .catch((err)=>console.log(err))
  // }
  
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <TextInput value={this.state.email} onChangeText={teks=>this.setState({email:teks})}/> */}
        {/* <TextInput value={this.state.password} onChangeText={teks=>this.setState({password:teks})}/> */}
        {/* <Button title="login" color="blue" onPress={()=>this.simpadta()} />  */}
        <Button title="login" color="blue" onPress={() => this.login()} />
        {/* <Button title="fsddsd" color="blue" onPress={() => this.ambildta()} /> */}
      </View>
    );
  }
}