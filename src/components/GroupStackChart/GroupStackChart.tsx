import React from "react";
import ChartLayout from "../ChartLayout";
import styled from "styled-components";
import { uniqueId } from "lodash";

type Props = {
  data: any[];
  startSpacing: number;
  spacingBetweenChart: number;
  widthBar: number;
  title?: string;
  strokeWidth?: number;
  isShowGrowth: boolean;
};
function GroupStackChart({
  title = "DEFAULT TITLE",
  spacingBetweenChart = 30,
  startSpacing = 100,
  strokeWidth = 2,
  widthBar = 60,
  isShowGrowth = true,
  ...props
}: Partial<Props>) {
  const calcWidthAxis = (_numOfGroup: number, _numOfBar: number) => {
    let widthXAxis = 0;
    if (_numOfGroup > 1) {
      widthXAxis =
        startSpacing +
        spacingBetweenChart * (_numOfGroup - 1) +
        widthBar * _numOfBar +
        widthBar * (_numOfGroup - 1) * _numOfBar;
    } else {
      widthXAxis =
        startSpacing +
        spacingBetweenChart * (_numOfBar - 1) +
        widthBar * (_numOfBar - 1);
    }
    return widthXAxis;
  };

  const calcX = (_groupIdx: number, _barIdx: number) => {
    let x = 0;
    const numOfGroup = 2;
    const numOfBar = 2;
    if (numOfGroup > 1) {
      x =
        startSpacing +
        spacingBetweenChart * _groupIdx +
        widthBar * _barIdx +
        widthBar * _groupIdx * numOfBar;
    } else {
      x = startSpacing + spacingBetweenChart * _barIdx + widthBar * _barIdx;
    }
    return x;
  };

  let widthXAxis = 0;

  const handleClick = () => {
    console.log("=> :::: Clicked ::::");
  };

  const getLabelBar = (_width: number, _text: string, _left: number) => {
    return (
      <Span
        key={uniqueId(`${_width + _left + _text}`)}
        style={{
          left: _left,
          width: _width,
          textAlign: "center",
        }}
      >
        {_text}
      </Span>
    );
  };

  const getLabelGroup = (_width: number, _text: string, _left: number) => {
    return (
      <P
        key={uniqueId(`${_width + _left + _text}`)}
        style={{
          left: _left,
          transform: "translateY(40px) rotate(-45deg)",
          width: _width,
        }}
      >
        {_text}
      </P>
    );
  };

  const labelGroup: any[] = [];
  const labelBar: any[] = [];

  const rfRender = (_data: any[]) => {
    const arr: any[] = [];
    const numOfGroup = _data.length;

    for (let groupIdx = 0; groupIdx < numOfGroup; groupIdx++) {
      const groupItem = _data[groupIdx].data.value;
      const groupLabel: string = _data[groupIdx].data.label;
      const growth = _data[groupIdx].growth;
      const numOfBar = groupItem.length;

      widthXAxis = calcWidthAxis(numOfGroup, numOfBar);

      labelGroup.push(
        getLabelGroup(
          widthBar * numOfBar,
          groupLabel,
          startSpacing +
            widthBar * numOfBar * groupIdx +
            spacingBetweenChart * groupIdx
        )
      );

      let yMin = 99999999;

      for (let barIdx = 0; barIdx < numOfBar; barIdx++) {
        let y = 320;
        const x = calcX(groupIdx, barIdx);
        const barItem = groupItem[barIdx].value;
        const barLabel = groupItem[barIdx].label;

        labelBar.push(
          getLabelBar(
            widthBar,
            barLabel,
            startSpacing +
              spacingBetweenChart * groupIdx +
              widthBar * barIdx +
              widthBar * numOfBar * groupIdx
          )
        );
        const numOfStack = barItem.length;
        for (let stackIdx = 0; stackIdx < numOfStack; stackIdx++) {
          const stackItem = barItem[stackIdx].percentage;
          const percentageScore = stackItem;
          const heightPx = percentageScore
            ? (percentageScore * 300) / (100 * numOfStack)
            : 10;
          y -= heightPx;
          yMin = Math.min(yMin, y);
          arr.push(
            <rect
              key={uniqueId(`${groupIdx + barIdx + stackIdx}`)}
              width={widthBar}
              strokeWidth="1.25" // default
              x={x}
              y={y}
              height={heightPx}
              stroke={stackItem?.strokeColor || "gray"}
              fill={stackItem?.fillColor || "yellow"}
              onClick={handleClick}
            />
          );
        }
      }

      const x = calcX(groupIdx, 0) + (widthBar - 40);
      const HEIGHT_DEFAULT_SVG_ARROW = 80;

      if (isShowGrowth) {
        if (growth > 0) {
          arr.push(
            <ArrowUpGrowth
              key={uniqueId(`${x}`)}
              x={x}
              y={yMin - HEIGHT_DEFAULT_SVG_ARROW}
              text={`${growth}%`}
              handleClick={handleClick}
            />
          );
        } else {
          arr.push(
            <ArrowDownGrowth
              key={uniqueId(`${x}`)}
              x={x}
              y={yMin - HEIGHT_DEFAULT_SVG_ARROW}
              text={`${growth}%`}
              handleClick={handleClick}
            />
          );
        }
      }
    }
    return arr;
  };
  const data = [
    {
      data: {
        label: "Label Of Group Dai Class",
        value: [
          {
            value: [
              {
                percentage: 12,
                info: {
                  name: "hi",
                },
              },
              {
                percentage: 35,
                info: {
                  name: "hi",
                },
              },
            ],
            label: "MOY",
          },
          {
            value: [
              {
                percentage: 56,
                info: {
                  name: "hi",
                },
              },
              {
                percentage: 29,
                info: {
                  name: "hi",
                },
              },
            ],
            label: "EOY",
          },
        ],
      },
      growth: 12,
    },
    {
      data: {
        label: "Label Of Group Tinh",
        value: [
          {
            value: [
              {
                percentage: 98,
                info: {
                  name: "hi",
                },
              },
              {
                percentage: 20,
                info: {
                  name: "hi",
                },
              },
            ],
            label: "Bar",
          },
          {
            value: [
              {
                percentage: 10,
                info: {
                  name: "hi",
                },
              },
              {
                percentage: 40,
                info: {
                  name: "hi",
                },
              },
            ],
            label: "Bar",
          },
        ],
      },
      growth: -12,
    },
    {
      data: {
        label: "Label Of Group Tinh",
        value: [
          {
            value: [
              {
                percentage: 98,
                info: {
                  name: "hi",
                },
              },
              {
                percentage: 20,
                info: {
                  name: "hi",
                },
              },
            ],
            label: "Bar",
          },
          {
            value: [
              {
                percentage: 10,
                info: {
                  name: "hi",
                },
              },
              {
                percentage: 40,
                info: {
                  name: "hi",
                },
              },
            ],
            label: "Bar",
          },
        ],
      },
      growth: 30,
    },
  ]; // length chart
  return (
    <ChartLayout
      widthChart={widthXAxis}
      strokeOfXAxisChart={strokeWidth}
      numOfStack={2}
      renderLabelGroup={() => labelGroup}
      renderLabelChart={() => labelBar}
      title={title}
    >
      {rfRender(data)}
    </ChartLayout>
  );
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
  return (
    <svg x={x} y={y} width={80} height={80}>
      <g onClick={handleClick}>
        <polygon
          points="15,10 65,10 65,40 72,40 40,55 8,40 15,40"
          fill={"#3197C2"}
        />
        <text
          x="50%"
          y="40%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={"#fff"}
        >
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
  return (
    <svg x={x} y={y} width={80} height={80}>
      <g onClick={handleClick}>
        <polygon
          points="15,70 65,70 65,40 72,40 40,25 8,40 15,40"
          fill={"#3197C2"}
        />
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={"#fff"}
        >
          {text}
        </text>
      </g>
    </svg>
  );
}

export default GroupStackChart;

/**
 *                          .||
 *                     ||.  .||                 ||
 *   START_SPACING     ||.||.||  _spacing       ||.||
 *<------------------> ||.||.||<-----------> ||.||.||
 *                     group:0               group:1
 *                bar:0| bar:1 | bar2 --- bar:0 | bar:1 | bar:2
 *
 */

const P = styled.p`
  position: absolute;
  top: 100%;
  width: calc(40px * 4);
  text-align: center;
`;

const Span = styled.span`
  font-size: 15px;
  position: absolute;
  top: 100%;
  width: 40px;
`;
