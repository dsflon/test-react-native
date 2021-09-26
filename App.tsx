import React from 'react';
import { StyleSheet, View } from 'react-native';

// import MemoListScreen from '@pages/MemoListScreen';
// import MemoDetail from '@pages/MemoDetail';
// import MemoEditor from '@pages/MemoEditor';
// import MemoCreator from '@pages/MemoCreator';
// import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MemoListScreen /> */}
      {/* <MemoDetail /> */}
      {/* <MemoEditor /> */}
      {/* <MemoCreator /> */}
      {/* <LogIn /> */}
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
