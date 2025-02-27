import React from 'react';
import Typography from '@components/atoms/typography/typography.atom';
import {Image, ImageProps, StyleSheet, View} from 'react-native';
import {isURL} from '@utils/util';
import Rating from '../../molecules/rating/rating.molecule';

export type FeaturedCardProps = {
  name: string;
  image: string;
  rating: number;
};

export default function FeaturedCard({name, image, rating}: FeaturedCardProps) {
  return (
    <View style={styles.card}>
      {isURL(image) ? (
        <Image resizeMode="cover" style={styles.image} source={{uri: image}} />
      ) : (
        <Image
          resizeMode="cover"
          style={styles.image}
          source={image as ImageProps}
        />
      )}
      <View style={styles.textsContainer}>
        <Typography.Body16>{name}</Typography.Body16>
        <Rating rating={rating} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: 200,
    height: 210,
    backgroundColor: 'white',
    shadowColor: '#ddd',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 140,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textsContainer: {
    padding: 12,
    gap: 6,
  },
});
