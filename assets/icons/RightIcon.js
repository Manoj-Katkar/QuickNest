import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const RightIcon = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_1041)">
      <Path
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill="#0CA94F"
      />
      <Path
        d="M2.578 8.17871L6.82 12.4207L13.4187 5.82204L12.0047 4.40804L6.82 9.59271L3.992 6.76471L2.578 8.17871Z"
        fill="#ECF0F1"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1041">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default RightIcon;
