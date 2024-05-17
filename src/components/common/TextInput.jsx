import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import color from '../../theme/color';

const AppTextInput = ({
  label,
  value,
  onChangeText,
  width,
  height,
  ...props
}) => {
  return (
    <View style={[styles.container, {width: width, height: height}]}>
      <TextInput
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor={color.white}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 16,
    borderColor: color.white,
    borderWidth: 2,
    marginLeft: 12,
  },
  input: {
    backgroundColor: 'transparent',
    color: color.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    fontFamily: 'Inter Regular',
  },
});

export default AppTextInput;
