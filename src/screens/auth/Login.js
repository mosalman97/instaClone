import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

//Packages

//Constants
import {SIZES} from '../../Constants';

export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.instagramlogo}>
            <Image
              source={require('../../assets/images/Logo.png')}
              alt="Icon"
            />
          </View>
          <View style={styles.profile}>
            <Image source={require('../../assets/images/Profile.png')} />
          </View>
          <Text style={styles.profilename}>Jack Trail</Text>
          <TouchableOpacity style={styles.loginbutton}>
            <Text style={styles.logintext}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.switchtext}>Switch accounts</Text>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.signupcontainer}>
            <Text style={{color: 'grey'}}>
              Don't have an account?
              <TouchableOpacity>
                <Text style={{color: 'white'}}>Sign up.</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
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
  topcontainer: {
    alignItems: 'center',
    // marginVertical: 150,
  },
  instagramlogo: {},
  profile: {},
  profilename: {
    color: 'white',
    fontSize: SIZES.hp('2%'),
  },
  loginbutton: {
    backgroundColor: 'dodgerblue',
    width: SIZES.wp('90%'),
    height: SIZES.hp('6%'),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logintext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: SIZES.wp('5%'),
  },
  bottomcontainer: {
    borderTopWidth: 1,
    borderColor: '#FFFFFF',
    // flex: 1,
  },
  switchtext: {
    color: 'dodgerblue',
  },
  signupcontainer: {
    alignItems: 'center',
  },
});
