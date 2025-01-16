import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HomeLocationIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
      stroke="#141B34"
      strokeWidth={1.5}
    />
    <Path
      d="M5 16C3.7492 16.6327 3 17.4385 3 18.3158C3 20.3505 7.02944 22 12 22C16.9706 22 21 20.3505 21 18.3158C21 17.4385 20.2508 16.6327 19 16"
      stroke="#141B34"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 10V18"
      stroke="#141B34"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default HomeLocationIcon;
