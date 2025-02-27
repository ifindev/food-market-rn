import React from 'react';
import {isURL} from '@utils/util';
import Typography from '@components/atoms/typography/typography.atom';
import {Image, ImageProps, StyleSheet, View} from 'react-native';
import Rating from '../../molecules/rating/rating.molecule';

type Props = {
  image: string;
  title: string;
  price: string;
  rating: number;
};

export default function FoodCard({image, title, price, rating}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {isURL(image) ? (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{uri: image}}
          />
        ) : (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={image as ImageProps}
          />
        )}
        <View style={styles.textContainers}>
          <Typography.Body16>{title}</Typography.Body16>
          <Typography variant="secondary">{price} </Typography>
        </View>
      </View>
      <Rating rating={rating} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textContainers: {
    flexDirection: 'column',
    gap: 2,
  },
  image: {
    borderRadius: 8,
    height: 60,
    width: 60,
  },
});
