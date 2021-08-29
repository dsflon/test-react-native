import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

interface Props {
  children?: string;
}

export default class CircleButton extends React.PureComponent<Props> {
  render() {
    const {
      children,
    } = this.props;

    return (
      <View style={styles.circleButton}>
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
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  circleButtonText: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
