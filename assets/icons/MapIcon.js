import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const MapIcon = props => (
  <Svg
    width={42}
    height={42}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle opacity={0.15} cx={18} cy={18} r={18} fill="#FF3B3B" />
    <Circle opacity={0.25} cx={18} cy={18} r={14} fill="#FF3B3B" />
    <Circle cx={18} cy={18} r={7} fill="#FF3B3B" />
  </Svg>
);
export default MapIcon;
