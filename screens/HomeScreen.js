// HomeScreen.js

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from '../pages/Login/LoginScreen';

const HomeScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    
    <View style={styles.container}>
              <LoginScreen />

      <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>Already have an account? Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
