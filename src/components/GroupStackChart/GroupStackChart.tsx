import React, { useRef, useState } from "react";
import ChartLayout from "../ChartLayout";
import { StyledComponent } from "styled-components";
import { uniqueId } from "lodash";
import { Growth, TData } from "./types";
import * as S from "./styled";
import "antd/dist/antd.css";
import Rect from "./Rect";
import ArrowGrowth from "./ArrowGrowth";
import { getNumOfValue } from "./helper";

type Props = {
  data: TData[];
  startSpacing?: number;
  spacingBetweenChart?: number;
  widthBar?: number;
  title?: string;
  strokeWidth?: number;
  isShowGrowth?: boolean;
  isShowPopoverGrowth?: boolean;
  isShowPopoverBar?: boolean;
  componentLabelBar?: StyledComponent<any, any>;
  componentLabelGroup?: StyledComponent<any, any>;
  widthForLabelGroup?: number;
};

function GroupStackChart({
  title = "DEFAULT TITLE",
  spacingBetweenChart = 50,
  startSpacing = 60,
  strokeWidth = 2,
  widthBar = 40,
  isShowGrowth = false,
  isShowPopoverGrowth = false,
  isShowPopoverBar = false,
  widthForLabelGroup,
  data,
  componentLabelBar: ComponentBar,
  componentLabelGroup: ComponentGroup,
}: Props) {
  const { numOfStack, numOfGroup, numOfBar } = getNumOfValue(data);

  const calcX = (_groupIdx: number, _barIdx: number) => {
    if (numOfGroup > 1) {
      return (
        startSpacing +
        spacingBetweenChart * _groupIdx +
        widthBar * _barIdx +
        widthBar * _groupIdx * numOfBar
      );
    } else {
      return startSpacing + spacingBetweenChart * _barIdx + widthBar * _barIdx;
    }
  };
  const widthXAxis = calcX(numOfGroup - 1, numOfBar + 1);

  const getEleLabelBar = (_width: number, _text: string, _left: number) => {
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

  const getEleLabelGroup = (_width: number, _text: string, _left: number) => {
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

  const getEleArrow = (
    { value, title, content }: Growth,
    yMin: number,
    groupIdx: number
  ) => {
    const HEIGHT_DEFAULT_SVG_ARROW = 80;
    const x = calcX(groupIdx, 0) + (widthBar - HEIGHT_DEFAULT_SVG_ARROW / 2);
    return (
      <ArrowGrowth
        isPopover={isShowPopoverGrowth}
        key={uniqueId(`${x}`)}
        x={x}
        y={yMin - HEIGHT_DEFAULT_SVG_ARROW}
        growth={value}
        title={title}
        content={content}
      />
    );
  };

  const getChart = (_data: TData[]) => {
    const charts: JSX.Element[] = [];
    const labelBars: JSX.Element[] = [];
    const labelGroups: JSX.Element[] = [];

    for (let groupIdx = 0; groupIdx < numOfGroup; groupIdx++) {
      const groupItem = _data[groupIdx];
      const { valueGroup, legendGroup, growth } = groupItem;

      const widthGroup = widthForLabelGroup
        ? widthForLabelGroup
        : widthBar * numOfBar + spacingBetweenChart / 2;
      const leftGroup =
        startSpacing +
        widthBar * numOfBar * groupIdx +
        spacingBetweenChart * groupIdx;

      const labelItemGroup = getEleLabelGroup(
        widthGroup,
        legendGroup,
        leftGroup
      );
      labelGroups.push(labelItemGroup);

      let yMin = 99999999;

      for (let barIdx = 0; barIdx < numOfBar; barIdx++) {
        const MAX_HEIGHT_SVG = 320;
        let y = MAX_HEIGHT_SVG;
        const x = calcX(groupIdx, barIdx);
        const barItem = valueGroup[barIdx];
        const { valueBar, legendBar } = barItem;

        if (legendBar) {
          const left =
            startSpacing +
            spacingBetweenChart * groupIdx +
            widthBar * barIdx +
            widthBar * numOfBar * groupIdx;

          const labelItemBar = getEleLabelBar(widthBar, legendBar, left);
          labelBars.push(labelItemBar);
        }

        for (let stackIdx = 0; stackIdx < numOfStack; stackIdx++) {
          const stackItem = valueBar[stackIdx];
          const { percentage, content, title } = stackItem;

          const heightPx = percentage
            ? (percentage * 300) / (100 * numOfStack)
            : 10;
          y -= heightPx;
          yMin = Math.min(yMin, y);

          charts.push(
            <Rect
              key={uniqueId(`${groupIdx + barIdx + stackIdx}`)}
              widthBar={widthBar}
              x={x}
              y={y}
              heightPx={heightPx}
              strokeColor={stackItem.info?.strokeColor}
              fillColor={stackItem.info?.fillColor}
              isPopover={isShowPopoverBar}
              title={title}
              content={content}
            />
          );
        }
      }

      if (isShowGrowth && growth !== undefined) {
        const arrow = getEleArrow(growth, yMin, groupIdx);
        charts.push(arrow);
      }
    }
    return { charts, labelBars, labelGroups };
  };
  const { charts, labelBars, labelGroups } = getChart(data);

  return (
    <ChartLayout
      widthChart={widthXAxis}
      strokeOfXAxisChart={strokeWidth}
      numOfStack={numOfStack}
      labelGroup={labelGroups}
      labelBar={labelBars}
      title={title}
    >
      {charts}
    </ChartLayout>
  );
}

export default GroupStackChart;
