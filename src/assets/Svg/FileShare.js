import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#858282"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m18.77 11.79-7.724 7.881a2.198 2.198 0 0 0 0 3.076v0c.862.88 2.277.88 3.139 0L25.286 11.42a3.955 3.955 0 0 0 0-5.538v0a3.956 3.956 0 0 0-5.65 0L7.92 17.838a5.714 5.714 0 0 0 0 7.998v0a5.714 5.714 0 0 0 8.162 0l8.842-9.022"
    />
  </Svg>
)
export default SvgComponent
