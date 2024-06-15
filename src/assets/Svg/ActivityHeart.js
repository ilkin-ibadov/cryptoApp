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
      r={10.8}
      fill="#FF1B7A"
      stroke="#fff"
      strokeWidth={2.4}
    />
    <Path
      fill="#fff"
      d="M12 17s-4.889-2.757-4.889-6.065c0-3.309 3.803-3.584 4.889-.996 1.086-2.588 4.889-2.313 4.889.996C16.889 14.243 12 17 12 17Z"
    />
  </Svg>
)
export default SvgComponent
