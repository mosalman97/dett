import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// constants
import {SIZES, COLORS} from '../constants/Constants';

const Button = ({title}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}>
        <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: SIZES.WP('92%'),
    height: SIZES.HP('6.8%'),
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.highlight,
  },
  buttontext: {
    fontSize: SIZES.HP('2%'),
    ...Platform.select({
      ios: {
        fontFamily: 'Gordita',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'medium',
      },
    }),
    color: COLORS.primarywhite,
    textAlign: 'center',
  },
});
