import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../../styles';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => {}} style={styles.button} />
    </View>
  );
};

export default SignupScreen;
