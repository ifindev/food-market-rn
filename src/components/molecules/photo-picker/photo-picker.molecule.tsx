import Typography from '@components/atoms/typography/typography.atom';
import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Svg, {Circle} from 'react-native-svg';

const OUTER_CIRCLE_SIZE = 100;
const OUTER_CIRCLE_STROKE_WIDTH = 1.5;

type Props = {
  onImageSelected: (uri: string | null) => void;
};

export default function PhotoPicker({onImageSelected}: Props) {
  // #region INTERNAL STATE
  const [imageUri, setImageUri] = useState<string | null>(null);
  // #endregion

  // #region PICK IMAGE HANDLER
  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo', quality: 0.8}, response => {
      console.log('Response:', response); // Debugging log
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      }
      if (response.errorMessage) {
        console.log('Error:', response.errorMessage);
        return;
      }
      if (
        response.assets &&
        response.assets.length > 0 &&
        response.assets[0].uri
      ) {
        const uri = response.assets[0].uri;
        console.log('Image URI:', uri); // Debugging log
        setImageUri(uri);
        onImageSelected(uri);
      }
    });
  };
  // #endregion

  return (
    <Pressable style={styles.container} onPress={pickImage}>
      {/* Dashed Circle */}
      <Svg
        height={OUTER_CIRCLE_SIZE + OUTER_CIRCLE_STROKE_WIDTH}
        width={OUTER_CIRCLE_SIZE + OUTER_CIRCLE_STROKE_WIDTH}
        style={styles.svg}>
        <Circle
          cx={(OUTER_CIRCLE_SIZE + OUTER_CIRCLE_STROKE_WIDTH) / 2}
          cy={(OUTER_CIRCLE_SIZE + OUTER_CIRCLE_STROKE_WIDTH) / 2}
          r={OUTER_CIRCLE_SIZE / 2}
          stroke="#8D92A3"
          strokeWidth={OUTER_CIRCLE_STROKE_WIDTH}
          strokeDasharray="10,10"
          fill="none"
        />
      </Svg>
      {imageUri ? (
        <Image style={styles.image} source={{uri: imageUri}} />
      ) : (
        <View style={styles.placeholderContainer}>
          <Typography.Body14 variant="secondary">Add</Typography.Body14>
          <Typography.Body14 variant="secondary">Photo</Typography.Body14>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 110, // Slightly larger than the image for padding
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  svg: {
    position: 'absolute',
    zIndex: 1,
  },
  placeholderContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    resizeMode: 'cover',
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
  },
});
