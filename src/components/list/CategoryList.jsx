import React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import {CategoryCard} from '../index';
import * as IconlyPack from '@lnanhkhoa/react-native-iconly';

const windowHeight = Dimensions.get('window').height;

const categories = [
  {
    id: '1',
    icon: IconlyPack.People,
    title: 'Community Health Workers',
  },
  {
    id: '2',
    icon: IconlyPack.Folder,
    title: 'Community Doulas',
  },
  {
    id: '3',
    icon: IconlyPack.User,
    title: 'Domestic Violence Peer Advocates',
  },
  {
    id: '4',
    icon: IconlyPack.Activity,
    title: 'Substance Abuse Peer Supporters',
  },
  {
    id: '5',
    icon: IconlyPack.Chart,
    title: 'Mental Health Peer Supports',
  },
  {
    id: '6',
    icon: IconlyPack.Discovery,
    title: 'Faith Based Peer Supporters',
  },
];

const CategoryList = () => {
  const renderItem = ({item}) => (
    <CategoryCard icon={item.icon} title={item.title} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: windowHeight * 0.02,
  },
  separator: {
    height: windowHeight * 0.01,
    backgroundColor: 'transparent',
  },
});
