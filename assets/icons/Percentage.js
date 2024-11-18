import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const Percentage = (props) => (
  <Svg
    width={230}
    height={4}
    viewBox="0 0 230 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect opacity={0.25} width={230} height={4} rx={2} fill="#3CB371" />
  </Svg>
);
export default Percentage;
