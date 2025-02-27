import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  fill?: string;
};

export default function Star({fill = '#FFC700'}: Props) {
  return (
    <Svg width="16" height="15" viewBox="0 0 16 15" fill="none">
      <Path
        d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
        fill={fill}
      />
    </Svg>
  );
}
