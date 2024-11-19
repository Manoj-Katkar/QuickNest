import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CrossIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 5L5 19M5 5L19 19"
      stroke="#F5F5F5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CrossIcon;
