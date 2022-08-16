import React from 'react';
import {View} from 'react-native';
import Login from './src/screens/auth/Login';
import ProfileLogin from './src/screens/auth/ProfileLogin';

const App = () => {
  return (
    <View>
      {/* <ProfileLogin/> */}
      <Login />
    </View>
  );
};
export default App;
