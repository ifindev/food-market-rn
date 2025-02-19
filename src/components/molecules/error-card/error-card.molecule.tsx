import React, {useRef} from 'react';
import IconButton from '@components/atoms/icon-button/icon-button.atom';
import Cancel from '@components/atoms/icons/cancel.icon';
import Typography from '@components/atoms/typography/typography.atom';
import {Animated, StyleSheet} from 'react-native';

type Props = {
  message: string;
  onClose: () => void;
};

export default function ErrorCard({message, onClose}: Props) {
  // #region ANIMATION
  const translateY = useRef(new Animated.Value(-100)).current;
  // #endregion

  // #region HANDLE CLOSE
  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };
  // #endregion

  return (
    <Animated.View style={styles.container}>
      <Typography.Body14 variant="white" bold>
        {message}
      </Typography.Body14>
      <IconButton onPress={handleClose} icon={<Cancel />} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: '#D9435E',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
});
