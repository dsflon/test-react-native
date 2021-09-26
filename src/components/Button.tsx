import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

// import { Feather } from '@expo/vector-icons';

// type FeatherNames = ComponentProps<typeof Feather>['name'];

interface Props {
  label: string;
}

export default class Button extends React.PureComponent<Props> {
  render() {
    const {
      label,
    } = this.props;

    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>{ label }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467fb3',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 16,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
