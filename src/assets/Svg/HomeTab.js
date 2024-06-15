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
      stroke="#B8B8B8"
      strokeWidth={3}
      d="M26.763 23.345v-7.991c0-1.2-.479-2.351-1.35-3.176-1.022-.966-2.439-2.27-3.583-3.184-2.164-1.727-3.244-3.14-5.83-3.14s-3.666 1.413-5.83 3.14c-1.144.914-2.561 2.218-3.583 3.184a4.362 4.362 0 0 0-1.35 3.176v7.991c0 1.486 1.205 2.293 2.69 2.293h3.837a1 1 0 0 0 1-1V19.34a3.279 3.279 0 1 1 6.558 0v5.298a1 1 0 0 0 1 1h3.75c1.487 0 2.691-.807 2.691-2.293Z"
    />
  </Svg>
)
export default SvgComponent
