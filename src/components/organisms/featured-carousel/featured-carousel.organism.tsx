/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import FeaturedCard, {
  FeaturedCardProps,
} from '@components/organisms/featured-card/featured-card.organism';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';

type CarouselItem = FeaturedCardProps & {
  id: string;
};

type Props = {
  data: CarouselItem[];
  onClick: (item: CarouselItem) => void;
};

export default function FeaturedCarousel({data, onClick}: Props) {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Pressable onPress={() => onClick(item)}>
            <FeaturedCard
              name={item.name}
              image={item.image}
              rating={item.rating}
            />
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  separator: {
    width: 24,
  },
});
