import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//Packages

//Constants
import {SIZES} from '../../Constants';

export default function ProfileLogin() {
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
            <Text style={styles.profilename}>Jack Trail</Text>
          </View>
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
    marginVertical: SIZES.hp('22%'),
  },
  instagramlogo: {
    marginBottom: SIZES.hp('4%'),
  },
  profile: {
    marginBottom: SIZES.hp('2%'),
  },
  profilename: {
    color: 'white',
    fontSize: SIZES.hp('2%'),
    marginTop: SIZES.hp('1%'),
  },
  loginbutton: {
    backgroundColor: 'dodgerblue',
    width: SIZES.wp('90%'),
    height: SIZES.hp('6%'),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.hp('4%'),
  },
  logintext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: SIZES.wp('5%'),
  },
  bottomcontainer: {
    borderTopWidth: 1,
    borderColor: '#FFFFFF',
  },
  switchtext: {
    color: 'dodgerblue',
    fontSize: SIZES.wp('4%'),
    fontWeight: '600',
  },
  signupcontainer: {
    alignItems: 'center',
    marginTop: SIZES.hp('2%'),
  },
});
