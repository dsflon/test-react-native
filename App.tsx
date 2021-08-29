// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Memo App</Text>
        <Text style={styles.appBarLogout}>Logout</Text>
      </View>
      {/* header */}

      <View>
        <View style={styles.list}>
          <View>
            <Text style={styles.listTitle}>買い物リスト</Text>
            <Text style={styles.listDate}>2021年8月29日 19:00</Text>
          </View>
          <View>
            <Text style={styles.listDelete}>✕</Text>
          </View>
        </View>
        {/* item end */}

        <View style={styles.list}>
          <View>
            <Text style={styles.listTitle}>買い物リスト</Text>
            <Text style={styles.listDate}>2021年8月29日 19:00</Text>
          </View>
          <View>
            <Text style={styles.listDelete}>✕</Text>
          </View>
        </View>
        {/* item end */}
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonText}>+</Text>
      </View>

      {/* eslint-disable-next-line react/style-prop-object */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appBarTitle: {
    width: '100%',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
  },
  appBarLogout: {
    color: '#FFFFFF',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  list: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    padding: 20,
  },
  listTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  listDate: {
    color: '#999999',
  },
  listDelete: {
    color: '#999999',
    fontSize: 18,
  },
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
    // ios
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // android
    elevation: 4,
  },
  circleButtonText: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
