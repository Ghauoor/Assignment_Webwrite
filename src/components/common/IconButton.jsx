import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import color from '../../theme/color';

const IconButton = ({
  onPress,
  showRedDot = false,
  size = 28,
  icon: Icon,
  iconColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon color={iconColor || color.white} size={size} />
        {showRedDot && <View style={styles.redDot} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: -1,
    right: -1,
    backgroundColor: color.notificationDot,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default IconButton;
