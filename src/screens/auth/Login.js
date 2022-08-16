import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
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
          <TouchableOpacity style={{marginBottom: SIZES.hp('4%')}}>
            <Text
              style={{
                color: '#3797EF',
                alignSelf: 'flex-end',
                marginRight: 10,
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity style={styles.loginbutton}>
              <Text style={styles.logintext}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.facebook}>
            <Image source={require('../../assets/images/fb.png')} />
            <TouchableOpacity style={{marginLeft: 12}}>
              <Text style={{color: '#3797EF', fontSize: SIZES.wp('4%')}}>
                Log in with Facebook
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Text style=>OR</Text> */}
        </View>
        <View style={styles.bottomcontianer}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: SIZES.hp('100%'),
    width: SIZES.wp('100%'),
  },
  topcontianer: {},
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
  bottomcontianer: {},
});
