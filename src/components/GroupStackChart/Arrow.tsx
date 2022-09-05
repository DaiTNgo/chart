import React, { useState } from "react";
import { Popover } from "antd";

function Arrow({ direction, info, x, y, growth }: any) {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const content = (
    <>
      <p>Class: {info.legendGroup}</p>
      <p>Growth: {info.growth}</p>
    </>
  );
  const title = (
    <button
      onClick={hide}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      X
    </button>
  );
  const getValue = (direction: string) => {
    switch (direction) {
      case "down":
        return {
          points: "15,10 65,10 65,40 72,40 40,55 8,40 15,40",
          xOfText: "50%",
          yOfText: "40%",
        };
      case "up":
        return {
          points: "15,70 65,70 65,40 72,40 40,25 8,40 15,40",
          xOfText: "50%",
          yOfText: "60%",
        };
      default:
        throw new Error("Invalid direction");
    }
  };
  const { points, xOfText, yOfText } = getValue(direction);
  return (
    <Popover
      open={open}
      onOpenChange={handleOpenChange}
      placement="topLeft"
      title={title}
      content={content}
      trigger="click"
    >
      <svg x={x} y={y} width={80} height={80}>
        <g>
          <polygon points={points} fill={"#3197C2"} />
          <text
            x={xOfText}
            y={yOfText}
            dominantBaseline="middle"
            textAnchor="middle"
            fill={"#fff"}
          >
            {growth}
          </text>
        </g>
      </svg>
    </Popover>
  );
}

export default Arrow;
