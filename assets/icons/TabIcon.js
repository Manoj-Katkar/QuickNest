import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const TabIcon = (props) => (
  <Svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={35} cy={35} r={35} fill="#FF3B3B" />
    <Path
      d="M35.1917 21.9561L35.1902 21.9551C35.1391 21.9194 35.0725 21.8971 34.9999 21.8971C34.9273 21.8971 34.8606 21.9194 34.8095 21.9551L34.8086 21.9557C32.8947 23.2881 27.7005 26.5026 22.2211 26.4619L22.2188 26.4619C22.1711 26.4615 22.1246 26.4701 22.0824 26.4865C22.0402 26.5028 22.0046 26.5259 21.9765 26.5525C21.9485 26.579 21.9287 26.6081 21.916 26.6371C21.9036 26.6653 21.8976 26.6939 21.8971 26.7218C21.8987 30.0299 22.247 33.9492 24.0199 37.7385C25.7816 41.5038 28.987 45.2195 34.8468 48.0685L35.1917 21.9561ZM35.1917 21.9561C37.1023 23.2843 42.2862 26.5129 47.7803 26.4619M35.1917 21.9561L47.7803 26.4619M47.7803 26.4619C47.8281 26.4615 47.8746 26.4702 47.9168 26.4866C47.959 26.503 47.9948 26.5262 48.023 26.5529C48.0511 26.5795 48.0711 26.6088 48.0839 26.6379C48.0963 26.6661 48.1024 26.6948 48.1029 26.7227C48.1011 30.0306 47.7527 33.9496 45.9799 37.7385C44.2182 41.5037 41.013 45.2194 35.1535 48.0684L47.7803 26.4619ZM34.2008 21.0826C32.3111 22.3981 27.3539 25.4362 22.229 25.3982L35.7989 21.0826C35.5667 20.9206 35.2869 20.8333 34.9999 20.8333C34.7128 20.8333 34.4331 20.9206 34.2008 21.0826Z"
      stroke="#F5F5F5"
      strokeWidth={2.12759}
    />
    <Path
      d="M35 40.6667H35.012"
      stroke="#F5F5F5"
      strokeWidth={2.83333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M35.0114 36.4167V30.75"
      stroke="#F5F5F5"
      strokeWidth={2.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default TabIcon;