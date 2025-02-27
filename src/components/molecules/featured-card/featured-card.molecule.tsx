import React, {useMemo} from 'react';
import Typography from '@components/atoms/typography/typography.atom';
import {Image, ImageProps, StyleSheet, View} from 'react-native';
import Star from '@components/atoms/icons/star.icon';
import {isURL} from '@utils/util';

export type FeaturedCardProps = {
  name: string;
  image: string;
  rating: number;
};

export default function FeaturedCard({name, image, rating}: FeaturedCardProps) {
  const starRatings = useMemo(() => {
    const stars = [];
    const roundedRating =
      rating > Math.floor(rating) + 0.5
        ? Math.ceil(rating)
        : Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(<Star />);
      } else {
        stars.push(<Star fill="#ECECEC" />);
      }
    }

    return stars;
  }, [rating]);

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
        <View style={styles.ratingContainer}>
          <View style={styles.starRatingContainer}>
            {starRatings.map(star => star)}
          </View>
          <Typography variant="secondary">{rating}</Typography>
        </View>
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
  ratingContainer: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});
