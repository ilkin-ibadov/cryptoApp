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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 6.224H5l5.5 5.5m9.5-5.5-7.5 13-2-7.5m9.5-5.5-9.5 5.5"
    />
  </Svg>
)
export default SvgComponent
