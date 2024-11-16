import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MemberIcon = (props) => (
  <Svg
    width={49}
    height={33}
    viewBox="0 0 49 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.5 11.5C25.5 13.7091 23.7091 15.5 21.5 15.5C19.2909 15.5 17.5 13.7091 17.5 11.5C17.5 9.29086 19.2909 7.5 21.5 7.5C23.7091 7.5 25.5 9.29086 25.5 11.5Z"
      stroke="#2B2B2B"
      strokeWidth={1.5}
    />
    <Path
      d="M27.5 15.5C29.7091 15.5 31.5 13.7091 31.5 11.5C31.5 9.29086 29.7091 7.5 27.5 7.5"
      stroke="#2B2B2B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.5 18.5H19.5C16.7386 18.5 14.5 20.7386 14.5 23.5C14.5 24.6046 15.3954 25.5 16.5 25.5H26.5C27.6046 25.5 28.5 24.6046 28.5 23.5C28.5 20.7386 26.2614 18.5 23.5 18.5Z"
      stroke="#2B2B2B"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M29.5 18.5C32.2614 18.5 34.5 20.7386 34.5 23.5C34.5 24.6046 33.6046 25.5 32.5 25.5H31"
      stroke="#2B2B2B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MemberIcon;
