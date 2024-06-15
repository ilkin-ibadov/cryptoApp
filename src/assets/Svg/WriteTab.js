import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}>
    <Path
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeWidth={3}
      d="M16.5 6.25h-3.75a6 6 0 0 0-6 6v7.5a6 6 0 0 0 6 6h7.5a6 6 0 0 0 6-6V16m-9.269-.547 8.415-8.415"
    />
  </Svg>
);
export default SvgComponent;
