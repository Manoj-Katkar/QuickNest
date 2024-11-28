import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HomeDark = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.75927 22.5L9.50864 18.9911C9.37389 17.1046 10.868 15.5 12.7593 15.5C14.6506 15.5 16.1447 17.1046 16.0099 18.9911L15.7593 22.5"
      stroke="#001E61"
      strokeWidth={1.5}
    />
    <Path
      d="M2.85157 13.7135C2.49855 11.4162 2.32204 10.2676 2.75635 9.24938C3.19065 8.23112 4.15421 7.53443 6.08132 6.14106L7.52117 5.1C9.91847 3.36667 11.1171 2.5 12.5002 2.5C13.8832 2.5 15.0819 3.36667 17.4792 5.1L18.919 6.14106C20.8462 7.53443 21.8097 8.23112 22.244 9.24938C22.6783 10.2676 22.5018 11.4162 22.1488 13.7135L21.8478 15.6724C21.3473 18.9289 21.0971 20.5572 19.9292 21.5286C18.7613 22.5 17.0538 22.5 13.639 22.5H11.3614C7.94652 22.5 6.23909 22.5 5.07118 21.5286C3.90327 20.5572 3.65305 18.9289 3.15261 15.6724L2.85157 13.7135Z"
      stroke="#00008B"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeDark;