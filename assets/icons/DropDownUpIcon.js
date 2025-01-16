import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DropDownUpIcon = props => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18 15C18 15 13.5811 9 12 9C10.4188 9 6 15 6 15"
      stroke="#002544"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DropDownUpIcon;
