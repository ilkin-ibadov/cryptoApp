import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Rect width={18} height={18} x={1.5} y={1.724} fill="#fff" rx={9} />
    <Rect
      width={18}
      height={18}
      x={1.5}
      y={1.724}
      stroke="#171717"
      strokeWidth={2}
      rx={9}
    />
    <Path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 7.224v7m-3.5-3.5h7"
    />
  </Svg>
)
export default SvgComponent
