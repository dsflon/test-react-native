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
      <View>
        <AppBar />
        <MemoList />
        <CircleButton style={styles.circleButton}>＋</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});
