import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

//Constants
import {SIZES} from '../../Constants';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topcontianer}>
          <View style={styles.instagramlogo}>
            <Image
              source={require('../../assets/images/Logo.png')}
              alt="Icon"
            />
          </View>
          <View style={styles.inputsection}>
            <TextInput
              placeholder="Username"
              onChange={userName => setUserName(userName)}
              value={userName}
              style={styles.input}
              placeholderTextColor="#8b8b8b"
            />
            <TextInput
              placeholder="Password"
              onChange={password => setPassword(password)}
              value={password}
              style={styles.input}
              placeholderTextColor="#8b8b8b"
            />
          </View>
          <TouchableOpacity
            style={{marginBottom: SIZES.hp('4%')}}
            activeOpacity={0.8}>
            <Text
              style={{
                color: '#3797EF',
                alignSelf: 'flex-end',
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
              <Text style={styles.logintext}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.facebook}>
            <Image source={require('../../assets/images/fb.png')} />
            <TouchableOpacity style={{marginLeft: 12}} activeOpacity={0.8}>
              <Text style={{color: '#3797EF', fontSize: SIZES.wp('4%')}}>
                Log in with Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orborder}>
            <View style={styles.leftborder}></View>
            <Text style={styles.ortext}>OR</Text>
            <View style={styles.rightborder}></View>
          </View>
          <View style={styles.signupcontainer}>
            <Text
              style={{
                color: 'grey',
                fontSize: SIZES.hp('2%'),
              }}>
              Don't have an account?
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#3797EF',
                    fontSize: SIZES.hp('2%'),
                    marginLeft: 5,
                  }}>
                  Sign up.
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        <View style={styles.bottomcontianer}></View>
        <Text
          style={{
            color: 'grey',
            alignSelf: 'center',
            marginTop: 35,
          }}>
          Instagram from Facebook
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: SIZES.hp('100%'),
    width: SIZES.wp('100%'),
    paddingHorizontal: 10,
  },
  topcontianer: {
    marginVertical: SIZES.hp('14%'),
  },
  instagramlogo: {
    alignItems: 'center',
  },
  inputsection: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#121212',
    width: SIZES.wp('95%'),
    height: SIZES.hp('6%'),
    borderRadius: 5,
    paddingLeft: 15,
    color: '#ffff',
    marginBottom: SIZES.hp('1.5%'),
  },
  loginbutton: {
    backgroundColor: 'dodgerblue',
    opacity: 0.5,
    width: SIZES.wp('95%'),
    height: SIZES.hp('6%'),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.hp('4%'),
  },
  logintext: {
    color: 'white',
    fontWeight: '700',
    fontSize: SIZES.wp('5%'),
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: SIZES.hp('4%'),
  },
  ortext: {
    color: 'white',
    marginHorizontal: SIZES.wp('6%'),
    fontSize: SIZES.hp('2%'),
  },
  orborder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.hp('5%'),
  },
  rightborder: {
    height: 0.2,
    borderRightWidth: SIZES.wp('40%'),
    borderRightColor: '#FFFFFF',
    opacity: 0.3,
  },
  leftborder: {
    height: 0.2,
    borderLeftColor: '#FFFFFF',
    borderLeftWidth: SIZES.wp('40%'),
    opacity: 0.3,
  },
  signupcontainer: {
    alignItems: 'center',
  },
  bottomcontianer: {
    borderTopWidth: 1,
    borderColor: '#FFFFFF',
    opacity: 0.1,
  },
});
