import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../../styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => {}} style={styles.button} />
    </View>
  );
};

export default LoginScreen;
