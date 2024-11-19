import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const UserImageIcon = (props) => (
  <Svg
    width={72}
    height={72}
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={36} cy={36} r={36} fill="#E8EBFB" />
    <Path
      d="M30.672 45.6V28.68H33.768V42.984H41.736V45.6H30.672Z"
      fill="#2B2B2B"
    />
  </Svg>
);
export default UserImageIcon;
