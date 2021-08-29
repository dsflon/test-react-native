import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

// interface Props {
//   children: string;
//   test?: number | undefined;
//   bool?: boolean | undefined;
//   additinalStyle?: any | undefined;
// }

// export default class Hello extends React.PureComponent<Props> {
export default class MemoList extends React.PureComponent {
  render() {
    // const {
    //   children,
    //   test,
    //   bool,
    //   additinalStyle,
    // } = this.props;

    return (
      <View>
        <View style={styles.list}>
          <View>
            <Text style={styles.listTitle}>買い物リスト</Text>
            <Text style={styles.listDate}>2021年8月29日 19:00</Text>
          </View>
          <View>
            <Feather name="x" size={18} color="#999999" />
          </View>
        </View>
        {/* item end */}

        <View style={styles.list}>
          <View>
            <Text style={styles.listTitle}>買い物リスト</Text>
            <Text style={styles.listDate}>2021年8月29日 19:00</Text>
          </View>
          <View>
            <Feather name="x" size={18} color="#999999" />
          </View>
        </View>
        {/* item end */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
