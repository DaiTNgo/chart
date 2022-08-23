import React, { useCallback } from "react";
import ChartLayout from "../ChartLayout";
import * as S from "./styled";

function Growth() {
  const renderChart = () => {
    return (
      <React.Fragment>
        <rect
          x={50}
          y={320 - 20}
          width={40}
          height={20}
          stroke={"#000"}
          strokeWidth="1.25"
          fill={"blue"}
          onClick={() => {
            console.log("click blue");
          }}
        />
        <rect
          x={50}
          y={320 - 20 - 20}
          width={40}
          height={20}
          stroke={"#000"}
          strokeWidth="1.25"
          fill={"yellow"}
          onClick={() => {
            console.log("click yellow");
          }}
        />
        <rect
          x={50}
          y={320 - 20 - 20 - 20}
          width={40}
          height={20}
          stroke={"#000"}
          strokeWidth="1.25"
          fill={"green"}
          onClick={() => {
            console.log("click green");
          }}
        />
        <rect
          x={50 + 40 + 50}
          y={320 - 20}
          width={40}
          height={20}
          stroke={"#000"}
          strokeWidth="1.25"
          fill={"blue"}
        />
        <rect
          x={50 + 40 + 50}
          y={320 - 20 - 20}
          width={40}
          height={20}
          stroke={"#000"}
          strokeWidth="1.25"
          fill={"yellow"}
        />
        <rect
          x={50 + 40 + 50}
          y={320 - 20 - 20 - 20}
          width={40}
          height={20}
          stroke={"#000"}
          strokeWidth="1.25"
          fill={"green"}
        />
        <svg x={100} y={100} width={80} height={80}>
          <polygon
            points="15,10 65,10 65,40 72,40 40,55 8,40 15,40"
            fill={"#3197C2"}
          />
          <text x={26} y={35} fontSize={20} fill={"#fff"}>
            9%
          </text>
        </svg>
        <svg x={250} y={100} width={80} height={80}>
          <polygon
            points="15,10 65,10 65,40 72,40 40,55 8,40 15,40"
            fill={"#3197C2"}
          />
          <text x={22} y={35} fontSize={20} fill={"#fff"}>
            99%
          </text>
        </svg>
        <ArrowDownGrowth
          x={350}
          y={100}
          text={"-100%"}
          handleClick={() => {
            console.log("hello ");
          }}
        />
        <ArrowUpGrowth
          x={550}
          y={100}
          text={"-100%"}
          handleClick={() => {
            console.log("hello sasasa");
          }}
        />
      </React.Fragment>
    );
  };

  return <ChartLayout>{renderChart()}</ChartLayout>;
}
function ArrowDownGrowth({
  x,
  y,
  text,
  handleClick,
}: {
  x: number;
  y: number;
  text: string;
  handleClick: () => void;
}) {
  const _x = {
    one: 16,
    two: 22,
    three: 26,
  };
  return (
    <svg x={x} y={y} width={80} height={80}>
      <g onClick={handleClick}>
        <polygon
          points="15,10 65,10 65,40 72,40 40,55 8,40 15,40"
          fill={"#3197C2"}
        />
        <text x={16} y={35} fontSize={20} fill={"#fff"}>
          {text}
        </text>
      </g>
    </svg>
  );
}
function ArrowUpGrowth({
  x,
  y,
  text,
  handleClick,
}: {
  x: number;
  y: number;
  text: string;
  handleClick?: () => void;
}) {
  const _x = {
    one: 16,
    two: 22,
    three: 26,
  };
  // const onClick = () => {
  //   isFunction(handleClick) && handleClick();
  // };

  return (
    <svg x={x} y={y} width={80} height={80}>
      <g onClick={handleClick}>
        <polygon
          points="15,70 65,70 65,40 72,40 40,25 8,40 15,40"
          fill={"#3197C2"}
        />
        <text x={16} y={55} fontSize={20} fill={"#fff"}>
          {text}
        </text>
      </g>
    </svg>
  );
}
export default Growth;
