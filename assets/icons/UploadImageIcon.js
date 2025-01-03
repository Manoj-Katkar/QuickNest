import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const UploadImageIcon = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 3C5.8579 3.18817 5.03406 3.53797 4.39124 4.1882C3 5.59548 3 7.86048 3 12.3905C3 16.9204 3 19.1854 4.39124 20.5927C5.78249 22 8.02166 22 12.5 22C16.9783 22 19.2175 22 20.6088 20.5927C22 19.1854 22 16.9204 22 12.3905C22 7.86048 22 5.59548 20.6088 4.1882C19.9659 3.53797 19.1421 3.18817 18 3"
      stroke="#002544"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 5.5C10.4915 4.9943 11.7998 3 12.5 3M12.5 3C13.2002 3 14.5085 4.9943 15 5.5M12.5 3V11"
      stroke="#002544"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 14H17.0743C16.2322 14 15.5706 14.7036 15.1995 15.4472C14.7963 16.2551 13.9889 17 12.5 17C11.0111 17 10.2037 16.2551 9.80054 15.4472C9.42942 14.7036 8.76777 14 7.92566 14H3"
      stroke="#002544"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default UploadImageIcon;
