import * as React from "react";
import { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.862 5.529a.667.667 0 0 1 .943 0L8 9.724l4.195-4.195a.667.667 0 1 1 .943.942l-4.667 4.667a.667.667 0 0 1-.942 0L2.862 6.471a.667.667 0 0 1 0-.942Z"
      fill="#6D6E85"
    />
  </svg>
);
export default SvgArrow;
