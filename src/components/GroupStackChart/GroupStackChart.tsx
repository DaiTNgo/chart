import React, { FunctionComponent, useState } from "react";
import ChartLayout from "../ChartLayout";
import { StyledComponent } from "styled-components";
import { uniqueId } from "lodash";
import { TData } from "./types";
import * as S from "./styled";

type Props = {
  data: TData[];
  startSpacing?: number;
  spacingBetweenChart?: number;
  widthBar?: number;
  title?: string;
  strokeWidth?: number;
  isShowGrowth?: boolean;
  componentLabelBar?: StyledComponent<any, any>;
  componentLabelGroup?: StyledComponent<any, any>;
};
function GroupStackChart({
  title = "DEFAULT TITLE",
  spacingBetweenChart = 50,
  startSpacing = 60,
  strokeWidth = 2,
  widthBar = 40,
  isShowGrowth = false,
  data,
  componentLabelBar: ComponentBar,
  componentLabelGroup: ComponentGroup,
}: Props) {
  const labelGroup: any[] = [];
  const labelBar: any[] = [];

  const getNumOfValue = (_data: TData[]) => {
    const numOfGroup: number = _data.length;
    const numOfBar: number = _data[0].value.length;
    const numOfStack: number = _data[0].value[0].value.length;

    return {
      numOfGroup,
      numOfBar,
      numOfStack,
    };
  };
  const { numOfStack, numOfGroup, numOfBar } = getNumOfValue(data);

  const calcWidthXAxis = () => {
    let widthXAxis = 0;
    if (numOfGroup > 1) {
      widthXAxis =
        startSpacing +
        spacingBetweenChart * (numOfGroup - 1) +
        widthBar * numOfBar +
        widthBar * (numOfGroup - 1) * numOfBar;
    } else {
      widthXAxis =
        startSpacing +
        spacingBetweenChart * (numOfBar - 1) +
        widthBar * (numOfBar - 1);
    }
    return widthXAxis;
  };
  const widthXAxis = calcWidthXAxis();

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

  const getLabelBar = (_width: number, _text: string, _left: number) => {
    return (
      <S.LabelBar
        key={uniqueId(`${_width + _left + _text}`)}
        as={ComponentBar}
        style={{
          left: _left,
          width: _width,
        }}
      >
        {_text}
      </S.LabelBar>
    );
  };

  const getLabelGroup = (_width: number, _text: string, _left: number) => {
    return (
      <S.LabelGroup
        key={uniqueId(`${_width + _left + _text}`)}
        as={ComponentGroup}
        style={{
          left: _left,
          width: _width,
        }}
      >
        {_text}
      </S.LabelGroup>
    );
  };

  const getArrow = (growth: number, yMin: number, groupIdx: number) => {
    const HEIGHT_DEFAULT_SVG_ARROW = 80;
    const x = calcX(groupIdx, 0) + (widthBar - HEIGHT_DEFAULT_SVG_ARROW / 2);

    if (growth > 0) {
      return (
        <ArrowUpGrowth
          key={uniqueId(`${x}`)}
          x={x}
          y={yMin - HEIGHT_DEFAULT_SVG_ARROW}
          text={`${growth}%`}
          handleClick={handleClick}
        />
      );
    } else {
      return (
        <ArrowDownGrowth
          key={uniqueId(`${x}`)}
          x={x}
          y={yMin - HEIGHT_DEFAULT_SVG_ARROW}
          text={`${growth}%`}
          handleClick={handleClick}
        />
      );
    }
  };

  const renderChart = (_data: TData[]) => {
    const arr: any[] = [];

    for (let groupIdx = 0; groupIdx < numOfGroup; groupIdx++) {
      const groupItem = _data[groupIdx].value;
      const groupLabel: string = _data[groupIdx].label;
      const growth = _data[groupIdx].growth;

      const labelItemGroup = getLabelGroup(
        widthBar * numOfBar,
        groupLabel,
        startSpacing +
          widthBar * numOfBar * groupIdx +
          spacingBetweenChart * groupIdx
      );
      labelGroup.push(labelItemGroup);

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

        for (let stackIdx = 0; stackIdx < numOfStack; stackIdx++) {
          const stackItem = barItem[stackIdx];
          const percentageScore = stackItem.percentage;
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
              stroke={stackItem.info?.strokeColor || "gray"}
              fill={stackItem.info?.fillColor || "yellow"}
              onClick={handleClick}
            />
          );
        }
      }

      if (isShowGrowth) {
        const arrow = getArrow(growth, yMin, groupIdx);
        arr.push(arrow);
      }
    }
    return arr;
  };

  const handleClick = () => {
    console.log("=> :::: Clicked ::::");
  };

  return (
    <ChartLayout
      widthChart={widthXAxis}
      strokeOfXAxisChart={strokeWidth}
      numOfStack={numOfStack}
      labelGroup={labelGroup}
      labelBar={labelBar}
      title={title}
    >
      {renderChart(data)}
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
