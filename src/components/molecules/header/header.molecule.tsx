import Avatar from '@components/atoms/avatar/avatar.atom';
import IconButton from '@components/atoms/icon-button/icon-button.atom';
import ChevronBack from '@components/atoms/icons/chevron-back.icon';
import Typography from '@components/atoms/typography/typography.atom';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  profileImage?: string;
};

export default function Header({title, subtitle, onBack, profileImage}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textButtonContainer}>
        {onBack && <IconButton onPress={onBack} icon={<ChevronBack />} />}
        <View style={styles.textContainer}>
          <Typography.Heading2>{title}</Typography.Heading2>
          <Typography.Body14 variant="secondary">{subtitle}</Typography.Body14>
        </View>
      </View>
      {profileImage && <Avatar src={profileImage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 26,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
});
