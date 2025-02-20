import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fill?: string;
};

export default function ChevronDown({fill = '#020202'}: Props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 9.70498L16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498Z"
        fill={fill}
      />
    </Svg>
  );
}
