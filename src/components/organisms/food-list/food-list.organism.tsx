import React from 'react';
import {FlatList, Pressable, StyleSheet} from 'react-native';
import {FeaturedCardProps} from '../featured-card/featured-card.organism';
import FoodCard from '../food-card/food-card.organism';

type Food = FeaturedCardProps & {
  id: string;
  price: string;
};

type Props = {
  foods: Food[];
  onClick: (food: Food) => void;
};
export default function FoodList({foods, onClick}: Props) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={foods}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Pressable onPress={() => onClick(item)}>
          <FoodCard
            key={item.id}
            image={item.image}
            title={item.name}
            rating={item.rating}
            price={item.price}
          />
        </Pressable>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
