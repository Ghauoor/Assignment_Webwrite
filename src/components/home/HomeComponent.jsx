import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import colors from '../../theme/color';
import {
  AvatarImage,
  AppText,
  IconButton,
  AppTextInput,
  ConnectBanner,
  CategoryCard,
} from '../index';
import * as IconlyPack from '@lnanhkhoa/react-native-iconly';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <AvatarImage
            size={windowWidth * 0.15}
            source={require('../../../assets/avatar.jpeg')}
            style={styles.avatarStyle}
          />
          {/* Text */}
          <View style={styles.textWrapper}>
            <AppText style={styles.titleText}>Hello, Welcome 🎉</AppText>
            <AppText style={styles.subTitleText}>Harold Williams</AppText>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <IconButton showRedDot icon={IconlyPack.Notification} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <AppTextInput label="Name" width="45%" height={windowHeight * 0.07} />
        <AppTextInput
          label="Zip Code"
          width="30%"
          height={windowHeight * 0.07}
        />
        <View style={styles.searchButtonContainer}>
          <IconButton icon={IconlyPack.Search} iconColor={colors.primary} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.02,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStyle: {
    marginRight: windowWidth * 0.03,
  },
  textWrapper: {
    flexDirection: 'column',
  },
  titleText: {
    color: colors.light,
    fontSize: windowHeight * 0.025,
    fontFamily: 'Inter Regular',
    fontWeight: '400',
  },
  subTitleText: {
    color: colors.light,
    fontSize: windowHeight * 0.028,
    fontWeight: '700',
    fontFamily: 'Inter Bold',
  },
  notificationContainer: {
    alignItems: 'flex-end',
    borderRadius: windowHeight * 0.01,
    borderColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    padding: windowWidth * 0.03,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingTop: windowHeight * 0.02,
    paddingLeft: windowWidth * 0.03,
    gap: 1,
  },
  searchButtonContainer: {
    borderRadius: windowHeight * 0.01,
    borderColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    padding: windowWidth * 0.03,
    backgroundColor: colors.white,
    marginLeft: windowWidth * 0.03,
  },
});

export default HomeComponent;
