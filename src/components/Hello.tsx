import React from 'react';
import {
  View, Text, StyleSheet, Shape,
} from 'react-native';

interface Props {
  children: string;
  test?: number | undefined;
  bool?: boolean | undefined;
  additinalStyle?: any | undefined;
}

// export default function Hello({
//   children,
//   test = undefined,
// }: Props) {
//   return (
//     <View>
//       <Text style={styles.text}>
//         Hello
//         {` ${children}`}
//         {test || ''}
//       </Text>
//     </View>
//   );
// }

export default class Hello extends React.PureComponent<Props> {
  render() {
    const {
      children,
      test,
      bool,
      additinalStyle,
    } = this.props;

    return (
      <View>
        <Text style={[styles.text, additinalStyle]}>
          {`Hello ${children}`}
          {test}
          {bool || ''}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#ff0000',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#ccc',
    padding: 16,
    marginBottom: 16,
  },
});
