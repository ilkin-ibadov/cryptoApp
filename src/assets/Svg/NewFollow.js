import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={11}
      fill="#8659F6"
      stroke="#fff"
      strokeWidth={2}
    />
    <Circle cx={11.718} cy={9.459} r={2.259} fill="#fff" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15.106 16.8c.624 0 1.144-.514.99-1.118a4.52 4.52 0 0 0-8.757 0c-.154.604.367 1.118.99 1.118h6.777Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
