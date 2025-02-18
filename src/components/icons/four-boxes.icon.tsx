import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  stroke?: string;
};

export default function FourBoxes({stroke = '#FDFDFD'}: Props) {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M3.33333 6.66666H4.66667C6 6.66666 6.66667 5.99999 6.66667 4.66666V3.33333C6.66667 1.99999 6 1.33333 4.66667 1.33333H3.33333C2 1.33333 1.33333 1.99999 1.33333 3.33333V4.66666C1.33333 5.99999 2 6.66666 3.33333 6.66666Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3333 6.66666H12.6667C14 6.66666 14.6667 5.99999 14.6667 4.66666V3.33333C14.6667 1.99999 14 1.33333 12.6667 1.33333H11.3333C10 1.33333 9.33334 1.99999 9.33334 3.33333V4.66666C9.33334 5.99999 10 6.66666 11.3333 6.66666Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3333 14.6667H12.6667C14 14.6667 14.6667 14 14.6667 12.6667V11.3333C14.6667 9.99999 14 9.33333 12.6667 9.33333H11.3333C10 9.33333 9.33334 9.99999 9.33334 11.3333V12.6667C9.33334 14 10 14.6667 11.3333 14.6667Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.33333 14.6667H4.66667C6 14.6667 6.66667 14 6.66667 12.6667V11.3333C6.66667 9.99999 6 9.33333 4.66667 9.33333H3.33333C2 9.33333 1.33333 9.99999 1.33333 11.3333V12.6667C1.33333 14 2 14.6667 3.33333 14.6667Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
