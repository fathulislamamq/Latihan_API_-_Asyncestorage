import React, {Component} from 'react';
import {Text, View, TextInput, ToastAndroid, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class SignUp extends Component {
  state = {
    visibel: true,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  signUp = () => {
    const {name, email, password, password_confirmation} = this.state;
    const url = 'http://restful-api-laravel-7.herokuapp.com/api/register';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }),
    })
      .then((respon) => respon.json())
      .then((resJson) => {
        console.log(resJson);
        if (resJson.token) {
          ToastAndroid.show(
            'Sign Up Berasil',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          this.props.navigation.replace('SignIn')
        } else {
          alert('error');
        }
      })
      .catch((error) => {
        console.log('error is' + error);
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#087cbf',
            width: '100%',
            height: 200,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
              top: 10,
            }}>
            <Image
              style={{width: 70, height: 70, alignSelf: 'center', padding: 5}}
              source={{
                uri:
                  'https://pondokit.com/pondokit/img/thumb/pondok-programmer.png'
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 450,
            borderRadius: 15,
            bottom: 70,
            alignSelf: 'center',
            elevation: 3,
          }}>
          <View>
            <View style={{marginVertical: 10,justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, fontWeight: 'bold',color:'#087cbf'}}>SIGN UP</Text>
            </View>
            <View
              style={{
                marginVertical: 1,
                marginHorizontal: 20,
                marginRight: 5,
              }}>
              <Text style={{color: '#b1afaf'}}>name</Text>
              <View style={{borderBottomWidth: 1, width: '90%'}}>
                <TextInput
                  value={this.state.name}
                  onChangeText={(text) => this.setState({name: text})}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 1,
                marginHorizontal: 20,
                marginRight: 5,
              }}>
              <Text style={{color: '#b1afaf'}}>email</Text>
              <View style={{borderBottomWidth: 1, width: '90%'}}>
                <TextInput
                  value={this.state.email}
                  onChangeText={(text) => this.setState({email: text})}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 1,
                marginHorizontal: 20,
                marginRight: 5,
              }}>
              <Text  style={{color: '#b1afaf'}}>password</Text>
              <View style={{borderBottomWidth: 1, width: '90%'}}>
                <TextInput
                  value={this.state.password}
                  secureTextEntry={this.state.visibel}
                  onChangeText={(text) => this.setState({password: text})}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 1,
                marginHorizontal: 20,
                marginRight: 5,
              }}>
              <Text style={{color: '#b1afaf'}}>password confirmasi</Text>
              <View style={{borderBottomWidth: 1, width: '90%'}}>
                <TextInput
                  value={this.state.password_confirmation}
                  secureTextEntry={this.state.visibel}
                  onChangeText={(text) => this.setState({password_confirmation: text})}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2f83f9',
              borderRadius: 20,
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              height: 40,
            }}
            onPress={() => this.signUp()}>
            <Text style={{fontSize: 17, borderRadius: 30, fontWeight: 'bold',color:'#fcf8f8'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUp;