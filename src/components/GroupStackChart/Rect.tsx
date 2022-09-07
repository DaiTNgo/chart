import React, { useState } from "react";
import { Popover, PopoverProps } from "antd";
import PopoverFA from "../PopoverFA/PopoverFA";
import { typeProficient } from "../parseData";
type Props = {
  widthBar: number;
  x: number;
  y: number;
  heightPx: number;
  strokeColor: string;
  fillColor: string;
  isPopover?: boolean;
  typeProficient?: string;
} & PopoverProps;
function Rect({
  strokeColor = "gray",
  fillColor = "yellow",
  widthBar,
  x,
  y,
  heightPx,
  ...props
}: Props) {
  return (
    <PopoverFA {...props}>
      <rect
        width={widthBar}
        strokeWidth="1.25"
        x={x}
        y={y}
        height={heightPx}
        stroke={strokeColor}
        fill={fillColor}
      />
    </PopoverFA>
  );
}

export default Rect;
