import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CrossIconBlack = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19.0005 5L5.00049 19M5.00049 5L19.0005 19"
      stroke="#141B34"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CrossIconBlack;
