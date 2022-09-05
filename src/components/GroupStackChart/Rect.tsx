import React, { useState } from "react";
import { Popover } from "antd";
type Props = {
  key: string;
  widthBar: number;
  x: number;
  y: number;
  heightPx: number;
  strokeColor: string;
  fillColor: string;
  info: any;
};
function Rect({
  key,
  widthBar,
  x,
  y,
  heightPx,
  strokeColor = "gray",
  fillColor = "yellow",
  info,
}: Props) {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      open={open}
      onOpenChange={handleOpenChange}
      placement="topLeft"
      title={"hihi"}
      content={<button onClick={hide}> Close</button>}
      trigger="click"
    >
      <rect
        key={key}
        width={widthBar}
        strokeWidth="1.25" // default
        x={x}
        y={y}
        height={heightPx}
        stroke={strokeColor}
        fill={fillColor}
      />
    </Popover>
  );
}

export default Rect;
