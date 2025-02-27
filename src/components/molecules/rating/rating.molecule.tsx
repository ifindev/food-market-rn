import React, {useMemo} from 'react';
import Star from '../../atoms/icons/star.icon';
import Typography from '../../atoms/typography/typography.atom';
import {StyleSheet, View} from 'react-native';

type Props = {
  rating: number;
};

export default function Rating({rating}: Props) {
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
    <View style={styles.ratingContainer}>
      <View style={styles.starRatingContainer}>
        {starRatings.map((star, idx) => (
          <React.Fragment key={idx}>{star}</React.Fragment>
        ))}
      </View>
      <Typography variant="secondary">{rating}</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
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
