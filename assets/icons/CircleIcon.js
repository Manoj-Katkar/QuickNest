import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const CircleIcon = props => (
  <Svg
    width={72}
    height={72}
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={36} cy={36} r={36} fill="#E8EBFB" />
  </Svg>
);
export default CircleIcon;
