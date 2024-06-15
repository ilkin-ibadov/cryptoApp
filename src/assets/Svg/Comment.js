import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeWidth={1.5}
      d="M4.5 12.724A8 8 0 0 0 16 19.92l4 .804-.5-4.124a8 8 0 1 0-15-3.876Z"
    />
  </Svg>
)
export default SvgComponent
