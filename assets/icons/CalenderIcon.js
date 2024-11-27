import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CalenderIcon = props => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 1.33331V2.66665M4 1.33331V2.66665"
      stroke="#141B34"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.99698 8.66669H8.00298M7.99698 11.3334H8.00298M10.6606 8.66669H10.6666M5.33331 8.66669H5.33929M5.33331 11.3334H5.33929"
      stroke="#141B34"
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.33331 5.33331H13.6666"
      stroke="#141B34"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.66669 8.16213C1.66669 5.25729 1.66669 3.80485 2.50143 2.90243C3.33618 2 4.67968 2 7.36669 2H8.63335C11.3204 2 12.6639 2 13.4986 2.90243C14.3334 3.80485 14.3334 5.25729 14.3334 8.16213V8.50453C14.3334 11.4094 14.3334 12.8618 13.4986 13.7643C12.6639 14.6667 11.3204 14.6667 8.63335 14.6667H7.36669C4.67968 14.6667 3.33618 14.6667 2.50143 13.7643C1.66669 12.8618 1.66669 11.4094 1.66669 8.50453V8.16213Z"
      stroke="#141B34"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 5.33331H14"
      stroke="#141B34"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CalenderIcon;
