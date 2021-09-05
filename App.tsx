import React from 'react';
import { StyleSheet, View } from 'react-native';

// import MemoListScreen from '@pages/MemoListScreen';
// import MemoDetail from '@pages/MemoDetail';
// import MemoEditor from '@pages/MemoEditor';
import MemoCreator from '@pages/MemoCreator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MemoListScreen /> */}
      {/* <MemoDetail /> */}
      {/* <MemoEditor /> */}
      <MemoCreator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
