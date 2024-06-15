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
      d="M19 5.69c-2.72-2.175-5.5 0-6.5 1-1-1-3.78-3.175-6.5-1-2.72 2.176-3.31 6.69.5 10.5 3.81 3.811 6 4.5 6 4.5s2.19-.689 6-4.5c3.81-3.81 3.22-8.324.5-10.5Z"
    />
  </Svg>
)
export default SvgComponent


