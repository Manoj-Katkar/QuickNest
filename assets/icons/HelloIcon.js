import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const HelloIcon = (props) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="#425FFF" fillOpacity={0.1} />
    <Path d="M25.56 38V23.9H28.14V35.82H34.78V38H25.56Z" fill="#2B2B2B" />
  </Svg>
);
export default HelloIcon;
