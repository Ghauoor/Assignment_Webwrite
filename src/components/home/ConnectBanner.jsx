import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../theme/color';
import {AppText} from '../index';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ConnectBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleTopLeft} />
      <View style={styles.circleBottomRight} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <AppText style={styles.textStyles}>
            Connect with{'\n'}
            community members
          </AppText>
          <AppText style={styles.subTextStyles}>
            Find the best NGOs or {`\n`} Meet the right Health{`\n`} Worker for
            you!
          </AppText>
        </View>
        <Image
          source={require('../../../assets/bannerimage.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default ConnectBanner;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.015,
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
    borderRadius: windowHeight * 0.02,
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  circleTopLeft: {
    position: 'absolute',
    top: -windowHeight * 0.015,
    left: -windowWidth * 0.03,
    width: windowWidth * 0.25,
    height: windowHeight * 0.14,
    borderRadius: windowWidth * 0.15,
    backgroundColor: colors.primary,
  },
  circleBottomRight: {
    position: 'absolute',
    bottom: -windowHeight * 0.015,
    right: -windowWidth * 0.03,
    width: windowWidth * 0.2,
    height: windowHeight * 0.12,
    borderRadius: windowWidth * 0.1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: windowWidth * 0.05,
    paddingRight: windowWidth * 0.05,
  },
  textContainer: {
    flex: 1,
  },
  textStyles: {
    color: colors.textColor,
    fontFamily: 'Inter Regular',
    fontSize: windowHeight * 0.025,
    fontWeight: '700',
  },
  subTextStyles: {
    color: colors.textColor,
    fontFamily: 'Inter Regular',
    fontSize: windowHeight * 0.016,
    marginTop: windowHeight * 0.012,
  },
  image: {
    width: windowWidth * 0.45,
    height: windowHeight * 0.18,
    resizeMode: 'contain',
  },
});
