import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

interface Props {
  children?: string;
  style?: object;
}

export default class CircleButton extends React.PureComponent<Props> {
  render() {
    const {
      children,
      style,
    } = this.props;

    return (
      <View style={[styles.circleButton, style]}>
        <Text style={styles.circleButtonText}>{children || '＋'}</Text>
      </View>
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
