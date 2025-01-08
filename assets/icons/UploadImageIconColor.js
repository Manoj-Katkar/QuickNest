import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const UploadImageIconColor = props => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} fill="#BFE2FF" />
    <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#F5F5F5" />
    <Path
      d="M18.8332 10.5019C18.4414 10.5 18.0254 10.5 17.5832 10.5C13.8512 10.5 11.9852 10.5 10.8259 11.6594C9.6665 12.8187 9.6665 14.6847 9.6665 18.4167C9.6665 22.1486 9.6665 24.0146 10.8259 25.174C11.9852 26.3333 13.8512 26.3333 17.5832 26.3333C21.3151 26.3333 23.1811 26.3333 24.3405 25.174C25.4558 24.0586 25.4982 22.2892 25.4998 18.8333"
      stroke="#2B2B2B"
      strokeWidth={1.25}
      strokeLinecap="round"
    />
    <Path
      d="M9.6665 19.7796C10.1824 19.7046 10.7039 19.6676 11.2263 19.669C13.4362 19.6222 15.592 20.3108 17.3091 21.6119C18.9015 22.8185 20.0204 24.4791 20.4998 26.3334"
      stroke="#2B2B2B"
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
    <Path
      d="M25.4998 22.0801C24.5203 21.584 23.5072 21.3322 22.4883 21.3333C20.9453 21.3272 19.4178 21.8943 17.9998 22.9999"
      stroke="#2B2B2B"
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
    <Path
      d="M22.1665 11.7501C22.5761 11.3287 23.6663 9.66675 24.2498 9.66675M24.2498 9.66675C24.8333 9.66675 25.9236 11.3287 26.3332 11.7501M24.2498 9.66675V16.3334"
      stroke="#2B2B2B"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default UploadImageIconColor;
