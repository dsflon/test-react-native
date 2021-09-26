import React, { ComponentProps } from 'react';
import {
  TouchableOpacity, StyleSheet,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

type FeatherNames = ComponentProps<typeof Feather>['name'];

interface Props {
  name?: FeatherNames;
  style?: object;
  onPress?(): void;
}

export default class CircleButton extends React.PureComponent<Props> {
  render() {
    const {
      style,
      name,
      onPress,
    } = this.props;

    return (
      <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
        <Feather name={name || 'plus'} size={24} color="#ffffff" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    // ios
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // android
    elevation: 4,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  circleButtonText: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
