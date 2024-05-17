import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import color from '../../theme/color';
import AppText from '../common/Text';

// Get the screen dimensions
const {width, height} = Dimensions.get('window');

const CategoryCard = ({icon: Icon, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon color={color.iconColor} size={30} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    height: height * 0.15,
    width: width * 0.88,
    borderRadius: 8,
    elevation: 3,
    shadowColor: color.black,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    height: height * 0.09,
    width: height * 0.09,
    borderRadius: (height * 0.09) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  textContainer: {
    maxWidth: '60%',
  },
  titleText: {
    fontSize: width * 0.045, // Adjust the font size based on screen width
    fontFamily: 'Inter Bold',
    fontWeight: '700',
  },
});
