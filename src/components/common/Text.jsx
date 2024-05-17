import React from 'react';
import {Text as PaperText} from 'react-native-paper';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <PaperText style={style} {...otherProps}>
      {children}
    </PaperText>
  );
};

export default AppText;
