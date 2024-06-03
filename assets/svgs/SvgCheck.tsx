import * as React from "react";
const SvgCheck = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#3c763d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M4 12.611 8.923 17.5 20 6.5"
    />
  </svg>
);
export default SvgCheck;
