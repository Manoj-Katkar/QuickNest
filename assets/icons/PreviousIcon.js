import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PreviousIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.99988 11.9998H19.9999"
      stroke="#141B34"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.9996 17C8.9996 17 3.99965 13.3176 3.99963 12C3.99962 10.6824 8.99963 7 8.99963 7"
      stroke="#141B34"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PreviousIcon;
