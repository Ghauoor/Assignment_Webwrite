import React from 'react';
import {Avatar} from 'react-native-paper';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const getResponsiveSize = baseSize => {
  return (baseSize / 375) * width;
};

const CustomAvatar = ({baseSize = 50, source, ...props}) => {
  const size = getResponsiveSize(baseSize);
  return <Avatar.Image size={size} source={source} {...props} />;
};

export default CustomAvatar;
