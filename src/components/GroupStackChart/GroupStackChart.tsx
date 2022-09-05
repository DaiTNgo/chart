import React, { useRef, useState } from "react";
import ChartLayout from "../ChartLayout";
import { StyledComponent } from "styled-components";
import { uniqueId } from "lodash";
import { TData } from "./types";
import * as S from "./styled";
import "antd/dist/antd.css";
import { Button, Popover } from "antd";
import Rect from "./Rect";
import Arrow from "./Arrow";

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
  const labelGroup: any[] = useRef([]).current;
  const labelBar: any[] = useRef([]).current;

  const getNumOfValue = (_data: TData[]) => {
    const numOfGroup: number = _data.length;
    const numOfBar: number = _data[0].valueGroup.length;
    const numOfStack: number = _data[0].valueGroup[0].valueBar.length;

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

  const getArrow = (
    growth: number,
    yMin: number,
    groupIdx: number,
    info?: any
  ) => {
    const HEIGHT_DEFAULT_SVG_ARROW = 80;
    const x = calcX(groupIdx, 0) + (widthBar - HEIGHT_DEFAULT_SVG_ARROW / 2);

    return (
      <Arrow
        key={uniqueId(`${x}`)}
        x={x}
        y={yMin - HEIGHT_DEFAULT_SVG_ARROW}
        growth={`${growth}%`}
        info={info}
        direction={growth > 0 ? "up" : "down"}
      />
    );
  };

  const renderChart = (_data: TData[]) => {
    const arr: any[] = [];

    for (let groupIdx = 0; groupIdx < numOfGroup; groupIdx++) {
      const groupItem = _data[groupIdx];
      const { valueGroup, legendGroup, growth } = groupItem;

      const labelItemGroup = getLabelGroup(
        widthBar * numOfBar,
        legendGroup,
        startSpacing +
          widthBar * numOfBar * groupIdx +
          spacingBetweenChart * groupIdx
      );
      labelGroup.push(labelItemGroup);

      let yMin = 99999999;

      for (let barIdx = 0; barIdx < numOfBar; barIdx++) {
        let y = 320;
        const x = calcX(groupIdx, barIdx);
        const barItem = valueGroup[barIdx].valueBar;
        const barLabel = valueGroup[barIdx].legendBar;

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
            <Rect
              key={uniqueId(`${groupIdx + barIdx + stackIdx}`)}
              widthBar={widthBar}
              x={x}
              y={y}
              heightPx={heightPx}
              strokeColor={stackItem.info?.strokeColor}
              fillColor={stackItem.info?.fillColor}
              info={"hi"}
            />
          );
        }
      }
      if (isShowGrowth) {
        const arrow = getArrow(growth, yMin, groupIdx, groupItem);
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
  info,
}: {
  x: number;
  y: number;
  text: string;
  info: any;
}) {
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
    </Popover>
  );
}

function ArrowUpGrowth({
  x,
  y,
  text,
  info,
}: {
  x: number;
  y: number;
  text: string;
  info: any;
}) {
  const content = <>{JSON.stringify(info)}</>;
  return (
    <Popover placement="topLeft" title={text} content={content} trigger="click">
      <svg x={x} y={y} width={80} height={80}>
        <g>
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
    </Popover>
  );
}

export default GroupStackChart;
