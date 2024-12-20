import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MemberIcon = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.5 7.5C13.5 9.70914 11.7091 11.5 9.5 11.5C7.29086 11.5 5.5 9.70914 5.5 7.5C5.5 5.29086 7.29086 3.5 9.5 3.5C11.7091 3.5 13.5 5.29086 13.5 7.5Z"
      stroke="#2B2B2B"
      strokeWidth={1.5}
    />
    <Path
      d="M15.5 11.5C17.7091 11.5 19.5 9.70914 19.5 7.5C19.5 5.29086 17.7091 3.5 15.5 3.5"
      stroke="#2B2B2B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 14.5H7.5C4.73858 14.5 2.5 16.7386 2.5 19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H14.5C15.6046 21.5 16.5 20.6046 16.5 19.5C16.5 16.7386 14.2614 14.5 11.5 14.5Z"
      stroke="#2B2B2B"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M17.5 14.5C20.2614 14.5 22.5 16.7386 22.5 19.5C22.5 20.6046 21.6046 21.5 20.5 21.5H19"
      stroke="#2B2B2B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MemberIcon;
