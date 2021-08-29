import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import AppBar from '@components/AppBar';
import CircleButton from '@components/CircleButton';

export default class MemoDetail extends React.PureComponent {
  render() {
    return (
      <View>
        <AppBar />

        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              買い物リスト
            </Text>
            <Text style={styles.headerDate}>
              2020年12月24日 10:00
            </Text>
          </View>
          <CircleButton style={styles.circleButton}>＋</CircleButton>
        </View>

        <ScrollView style={styles.body}>
          <Text style={styles.bodyText}>
            買い物リスト
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  headerWrapper: {
    position: 'relative',
  },
  circleButton: {
    position: 'absolute',
    right: 30,
    bottom: -30,
  },
  header: {
    backgroundColor: '#467FD3',
    height: 100,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerDate: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  body: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
