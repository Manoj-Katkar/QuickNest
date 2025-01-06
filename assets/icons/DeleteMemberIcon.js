import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DeleteMemberIcon = props => (
  <Svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.0835 10H7.16687"
      stroke="#2B2B2B"
      strokeOpacity={0.75}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.2709 10.0001C19.2709 5.39771 15.4 1.66675 10.6251 1.66675C5.85021 1.66675 1.97937 5.39771 1.97937 10.0001C1.97937 14.6024 5.85021 18.3334 10.6251 18.3334C15.4 18.3334 19.2709 14.6024 19.2709 10.0001Z"
      stroke="#2B2B2B"
      strokeOpacity={0.75}
      strokeWidth={1.25}
    />
  </Svg>
);
export default DeleteMemberIcon;
