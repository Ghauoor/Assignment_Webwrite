import {Platform} from 'react-native';

export const getPlatform = () => {
  const platform = Platform.OS;
  return {
    isIOS: platform === 'ios',
    isAndroid: platform === 'android',
  };
};
