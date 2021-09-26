import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AppBar from '@components/AppBar';
import Button from '@components/Button';

export default class LogIn extends React.PureComponent {
  // eslint-disable-next-line class-methods-use-this
  login() {
    Alert.alert('login');
  }

  render() {
    return (
      <View style={styles.container}>
        <AppBar />

        <View style={styles.inner}>
          <View>
            <Text style={styles.title}>Log In</Text>
            <TextInput style={styles.input} value="Email" />
            <TextInput style={styles.input} value="Password" />
          </View>

          <Button label="Submit" onPress={this.login} />

          <View style={styles.footerConteiner}>
            <Text style={styles.footerText}>Not registered?</Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  footerConteiner: {
    flexDirection: 'row',
    marginTop: 15,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 10,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fb3',
  },
});
