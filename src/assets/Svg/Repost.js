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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.5 14.224v-4.5a3 3 0 0 1 3-3H16m0 0-3-3m3 3-3 3m6.5 1.5v4.5a3 3 0 0 1-3 3H9m0 0 3 3m-3-3 3-3"
    />
  </Svg>
)
export default SvgComponent
