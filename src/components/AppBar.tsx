import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

// interface Props {
//   children: string;
//   test?: number | undefined;
//   bool?: boolean | undefined;
//   additinalStyle?: any | undefined;
// }

// export default class Hello extends React.PureComponent<Props> {
export default class AppBar extends React.PureComponent {
  render() {
    // const {
    //   children,
    //   test,
    //   bool,
    //   additinalStyle,
    // } = this.props;

    return (
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Memo App</Text>
        <Text style={styles.appBarLogout}>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

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
});
