import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={3}
    height={103}
    fill="none"
    {...props}
  >
    <Path stroke="#232323" strokeWidth={2} d="M1.5.724v102" />
  </Svg>
)
export default SvgComponent
