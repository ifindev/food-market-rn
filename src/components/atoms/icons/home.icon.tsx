import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export default function Home() {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_17_387)">
        <Path
          d="M3 15.1996C3 14.385 3.33123 13.6055 3.91759 13.0401L16 1.38919L28.0824 13.0401C28.6688 13.6055 29 14.385 29 15.1996V28C29 29.6569 27.6569 31 26 31H6C4.34315 31 3 29.6569 3 28V15.1996Z"
          stroke="#E2E2E2"
          strokeWidth="2"
        />
        <Path
          d="M20.774 20.168H16.976V24.002H15.374V20.168H11.594V18.674H15.374V14.822H16.976V18.674H20.774V20.168Z"
          fill="#E2E2E2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_17_387">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
