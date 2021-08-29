import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';

import AppBar from '@components/AppBar';
import MemoList from '@components/MemoList';
import CircleButton from '@components/CircleButton';

export default class MemoListScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoList />
        <CircleButton style={styles.circleButton} name="plus" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});
