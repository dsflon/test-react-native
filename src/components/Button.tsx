import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';

// import { Feather } from '@expo/vector-icons';

// type FeatherNames = ComponentProps<typeof Feather>['name'];

interface Props {
  label: string;
  onPress?(): void;
}

export default class Button extends React.PureComponent<Props> {
  render() {
    const {
      label,
      onPress,
    } = this.props;

    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonLabel}>{ label }</Text>
      </TouchableOpacity>
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
