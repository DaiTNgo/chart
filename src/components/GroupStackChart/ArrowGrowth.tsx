import React, { useState } from "react";
import { Popover, PopoverProps } from "antd";
import PopoverFA from "../PopoverFA/PopoverFA";
type Props = {
  x: number;
  y: number;
  growth: number;
  isPopover?: boolean;
  typeProficient?: string;
} & PopoverProps;

export enum Direction {
  Down = "Down",
  Up = "Up",
}
function ArrowGrowth({ x, y, growth, ...props }: Props) {
  const getValueDirectionUp = React.useCallback(
    () => ({
      points: "15,70 65,70 65,40 72,40 40,25 8,40 15,40",
      xOfText: "50%",
      yOfText: "60%",
    }),
    []
  );
  const getValueDirectionDown = React.useCallback(
    () => ({
      points: "15,10 65,10 65,40 72,40 40,55 8,40 15,40",
      xOfText: "50%",
      yOfText: "40%",
    }),
    []
  );
  const arrow = React.useMemo(
    () => ({
      [Direction.Up]: getValueDirectionUp(),
      [Direction.Down]: getValueDirectionDown(),
    }),
    []
  );

  const direction = growth > 0 ? Direction.Up : Direction.Down;
  const { points, xOfText, yOfText } = arrow[direction];

  return (
    <PopoverFA {...props}>
      <svg
        x={x}
        y={y}
        width={80}
        height={80}
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <g>
          <polygon points={points} fill={"#3197C2"} />
          <text
            x={xOfText}
            y={yOfText}
            dominantBaseline="middle"
            textAnchor="middle"
            fill={"#fff"}
          >
            {growth}%
          </text>
        </g>
      </svg>
    </PopoverFA>
  );
}

export default ArrowGrowth;
