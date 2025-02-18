import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FourBoxes from './icons/four-boxes.icon';
import ShirtIcon from './icons/shirt.icon';

const categories = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'All Items',
    icon: FourBoxes,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Shirts',
    icon: ShirtIcon,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dress',
    icon: ShirtIcon,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d87',
    title: 'Tank Tops',
    icon: ShirtIcon,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d92',
    title: 'Sweaters',
    icon: ShirtIcon,
  },
];

function FlatListSeparator() {
  return <View style={styles.itemGap} />;
}

export default function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(categories[0].id);

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              activeCategory === item.id && styles.activeCategoryItem,
            ]}
            onPress={() => setActiveCategory(item.id)}>
            <item.icon
              stroke={activeCategory === item.id ? '#FDFDFD' : '#292526'}
            />
            <Text
              style={[
                styles.categoryText,
                activeCategory === item.id && styles.activeCategoryText,
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={FlatListSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    marginTop: 32,
  },
  itemGap: {
    width: 10,
  },
  categoryItem: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DFDEDE',
  },
  categoryText: {
    color: '#292526',
    marginLeft: 8,
    fontSize: 12,
  },
  activeCategoryItem: {
    backgroundColor: '#292526',
    borderWidth: 0,
  },
  activeCategoryText: {
    color: 'white',
  },
});
