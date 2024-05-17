import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import colors from '../theme/color';
import {StatusBar} from 'react-native';
import {
  CategoryList,
  ConnectBanner,
  HomeComponent,
  AppText,
  CommunityCard,
} from '../components/index.js';

const HomeScreen = () => {
  const statusBarColor = colors.primary;
  const statusBarContentStyle = 'light-content';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar
          barStyle={statusBarContentStyle}
          backgroundColor={statusBarColor}
        />
        <HomeComponent />
      </View>
      <View style={{flex: 2}}>
        <CommunityCard />
        <ConnectBanner />
        <View style={styles.categoryTextRow}>
          <AppText style={styles.categoryText}>Category</AppText>
          <AppText style={styles.seeAllText}>See All</AppText>
        </View>
        <View style={styles.listContainer}>
          <CategoryList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  categoryTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Inter Bold',
    color: colors.darkBlack,
    marginLeft: 24,
  },
  seeAllText: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Inter Regular',
    color: colors.primary,
    marginRight: 24,
  },
  listContainer: {
    flex: 1,
  },
});
