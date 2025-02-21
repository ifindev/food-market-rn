import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export default function ProfileActive() {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M31 26.4103C31 32.2737 24.2843 31.998 16 31.998C7.71573 31.998 1 32.2737 1 26.4103C1 20.547 7.71573 15 16 15C24.2843 15 31 20.547 31 26.4103Z"
        fill="#FFC700"
      />
      <Circle cx="16" cy="7" r="7" fill="#FFC700" />
    </Svg>
  );
}
