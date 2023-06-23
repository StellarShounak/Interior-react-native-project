import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Input, CheckBox, Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/backgroundimage.png')} style={styles.backgroundImage} resizeMode="cover" />
      <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" />
      <Card containerStyle={styles.card}>
        <Card.Title>LOGIN</Card.Title>
        <Card.Divider />

        <Input placeholder="Enter Username or Email" containerStyle={styles.inputContainer} inputStyle={styles.input} />
        <Input placeholder="Enter Password" secureTextEntry inputStyle={styles.input} />

        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Remember me"
            checked={rememberMe}
            onPress={handleRememberMeToggle}
            containerStyle={styles.checkboxContainerStyle}
            textStyle={styles.rememberMeText}
          />

          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>

        <Button title="Login" buttonStyle={styles.loginButton} onPress={handleLogin} />
        <View style={styles.orContainer}>
          <Text style={styles.orText}>OR</Text>
        </View>
        <Button title="Login with Facebook" buttonStyle={styles.facebookButton} />
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Text style={styles.signupLink}>Sign up</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    marginTop: 1,
    marginVertical: -12,
  },
  input: {
    fontSize: 14,
  },
  logo: {
    width: 160,
    height: 180,
    marginTop: -160,
    marginBottom: -40,
    marginLeft: 10,
  },
  card: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: -2,
  },
  checkboxContainerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  rememberMeText: {
    fontSize: 12,
    color: 'grey',
  },
  forgotPasswordText: {
    fontSize: 12,
    color: 'blue',
  },
  loginButton: {
    backgroundColor: '#549F32',
    marginVertical: 7,
  },
  orContainer: {
    alignItems: 'center',
    marginVertical: -1,
  },
  orText: {
    fontSize: 12,
  },
  facebookButton: {
    backgroundColor: '#3A589B',
    marginVertical: 10,
    marginBottom: 12,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    marginTop: 3,
    fontSize: 14,
    marginLeft: 33,
  },
  signupLink: {
    fontSize: 14,
    color: '#549F32',
    marginLeft: 10,
  },
});

export default LoginScreen;
