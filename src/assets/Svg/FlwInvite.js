import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={5}
      cy={5}
      r={5}
      stroke="#fff"
      strokeWidth={2.4}
      transform="matrix(1 0 0 -1 13.5 12)"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.4}
      d="M10.1 22.6v-1.2a6 6 0 0 1 6-6h5.4a6 6 0 0 1 6 6v1.2M5.3 5.8V13M8.9 9.4H1.7"
    />
  </Svg>
)
export default SvgComponent
