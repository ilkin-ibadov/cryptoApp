import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={13.846} stroke="#fff" strokeWidth={2.4} />
    <Path
      stroke="#fff"
      strokeWidth={2.4}
      d="M21.065 33.846c-4.706 0-8.52-6.199-8.52-13.846s3.814-13.846 8.52-13.846"
    />
    <Path
      stroke="#fff"
      strokeWidth={2.4}
      d="M18.935 33.846c4.118 0 7.456-6.199 7.456-13.846S23.053 6.154 18.935 6.154M7.219 14.675h25.562M7.219 25.325h25.562"
    />
  </Svg>
)
export default SvgComponent
