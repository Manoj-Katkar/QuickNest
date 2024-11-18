import * as React from "react";
import Svg, { Path } from "react-native-svg";
const NavLines = (props) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.6667 5.83337H23.3333"
      stroke="#001E61"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.66667 14H23.3333"
      stroke="#001E61"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.66667 22.1666H16.3333"
      stroke="#001E61"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default NavLines;
