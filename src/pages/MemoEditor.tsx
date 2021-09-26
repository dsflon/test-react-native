import React from 'react';
import {
  View, TextInput, StyleSheet, KeyboardAvoidingView, Alert,
} from 'react-native';

import AppBar from '@components/AppBar';
import CircleButton from '@components/CircleButton';

export default class MemoDetail extends React.PureComponent {
  // eslint-disable-next-line class-methods-use-this
  test() {
    Alert.alert('Pressed');
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <AppBar />

        <View style={styles.inputContainer}>
          <TextInput value="買い物リスト" multiline style={styles.input} />
        </View>

        <CircleButton
          style={styles.circleButton}
          name="check"
          onPress={this.test}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 30,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
  circleButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});
