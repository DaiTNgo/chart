import React from "react";
import * as S from "./styled";
import { HEIGHT_SVG_PX, Y_END_SVG_PX } from "../../helper/constants";

type Props = {
  children: React.ReactNode;
  labelBar?: JSX.Element[];
  labelGroup?: JSX.Element[];
  strokeOfXAxisChart?: number;
  title?: string;
  widthChart?: number;
  // render line and percentage: 1 => 100%; 5 => 500%
  numOfStack?: number;
  arrow?: any;
};
function ChartLayout({
  numOfStack = 1,
  strokeOfXAxisChart = 2,
  children,
  labelBar,
  widthChart,
  labelGroup,
  title = "DEFAULT TITLE",
  arrow,
}: Props) {
  const renderAxis = (_isXAxis: boolean) => {
    const PERCENT = numOfStack * 100;

    let DISTANCE_PERCENTAGE = 20;
    if (numOfStack > 1) {
      DISTANCE_PERCENTAGE = 50;
    }
    const numOfPercent = PERCENT / DISTANCE_PERCENTAGE;

    const arr = new Array(numOfPercent).fill(0);

    return arr.map((_, index) => {
      const yDistancePercentagePx = HEIGHT_SVG_PX / numOfPercent;
      const y = Y_END_SVG_PX + yDistancePercentagePx * index;
      const text = PERCENT - DISTANCE_PERCENTAGE * index;

      if (_isXAxis) {
        return <S.Line y={y} key={index} />;
      } else {
        return (
          <S.Text key={index} y={y} x={15}>
            {text}
          </S.Text>
        );
      }
    });
  };

  return (
    <S.ChartContainer>
      <div className={"chart-left"}>
        <p className={"chart-title"}>{title} (%)</p>
      </div>
      <div className={"chart-right"}>
        <div className={"chart-score"}>
          <S.Svg width={30}>{renderAxis(false)}</S.Svg>
        </div>
        <S.ChartData>
          <S.ChartWrapper>
            <S.Svg width={widthChart}>
              {renderAxis(true)}
              <S.LineBottom y={320} strokeWidth={strokeOfXAxisChart} />
              {children}
            </S.Svg>
            {/*<div>{arrow && arrow}</div>*/}
            {labelBar && labelBar}
            {labelGroup && labelGroup}
          </S.ChartWrapper>
        </S.ChartData>
        <div
          className="arrow"
          style={{
            width: widthChart,
          }}
        >
          {arrow && arrow}
        </div>
      </div>
    </S.ChartContainer>
  );
}

export default ChartLayout;
