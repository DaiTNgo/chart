import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  const color = props.color ? props.color : "#000";

  const original_width = 32.985;
  const original_height = 32.985;

  const strokeWidth = props.strokeWidth ? props.strokeWidth : 2;

  let width = original_width;
  let height = original_height;

  if (props.width) {
    width = parseFloat(props.width + "");
    height = (parseFloat(props.width + "") * original_height) / original_width;
  } else if (props.height) {
    height = parseFloat(props.height + "");
    width = (parseFloat(props.height + "") * original_width) / original_height;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 32.985 32.985"
    >
      <path
        d="M1.414 1.414L31.57 31.57M31.57 1.414L1.414 31.57"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: strokeWidth,
        }}
      />
      <path
        d="M1.414 1.414L31.57 31.57M31.57 1.414L1.414 31.57"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: strokeWidth,
        }}
      />
    </svg>
  );
}

const CloseLarge = React.memo(SvgComponent);
export default CloseLarge;
