import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import color from '../../theme/color';
import {AppText, CustomButton} from '../index';

const {width, height} = Dimensions.get('window');

const CommunityCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/commuitbg.png')}
        style={styles.card}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}>
        <View style={styles.imagesContainer}>
          <Image
            style={styles.innerImage}
            source={require('../../../assets/helpingHands.jpeg')}
          />
          <View style={styles.rightContent}>
            <Image
              style={styles.rightImage}
              source={require('../../../assets/communit.png')}
            />
            <AppText style={styles.rightText}>
              Providing a circle of support, {'\n'} a community of care
            </AppText>
            <CustomButton title="Get Started" style={styles.getStartedButton} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -15,
  },
  card: {
    width: '92%',
    height: height * 0.2, // Adjust the height based on screen height
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    left: -15,
    top: -20,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: width * 0.05, // Adjust the horizontal padding based on screen width
  },
  innerImage: {
    width: width * 0.35, // Adjust the width based on screen width
    height: width * 0.35, // Keep it square
    borderRadius: 10,
    borderTopRightRadius: 80,
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: width * 0.05, // Adjust the margin based on screen width
  },
  rightImage: {
    width: width * 0.4, // Adjust the width based on screen width
    height: height * 0.05, // Adjust the height based on screen height
    resizeMode: 'cover',
  },
  rightText: {
    fontSize: width * 0.035, // Adjust the font size based on screen width
    color: color.white,
    marginTop: 10,
    marginLeft: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter Bold',
    flexWrap: 'wrap',
  },
  getStartedButton: {
    marginTop: 10,
    marginRight: 10,
  },
});

export default CommunityCard;
