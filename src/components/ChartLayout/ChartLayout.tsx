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
  arrows?: any;
};
function ChartLayout({
  numOfStack = 1,
  strokeOfXAxisChart = 2,
  children,
  labelBar,
  widthChart,
  labelGroup,
  title = "DEFAULT TITLE",
  arrows,
}: Props) {
  const renderAxis = (_numOfStack: number) => (_isXAxis: boolean) => {
    const HEIGHT_SVG_PX = 300;
    const Y_END_SVG_PX = 20;

    const totalPercentage = _numOfStack * 100;

    let DISTANCE_PERCENTAGE = 20;
    if (_numOfStack > 1) {
      DISTANCE_PERCENTAGE = 50;
    }
    const numOfPercent = totalPercentage / DISTANCE_PERCENTAGE;

    const arr = new Array(numOfPercent).fill(0);

    return arr.map((_, index) => {
      const yDistancePercentagePx = HEIGHT_SVG_PX / numOfPercent;
      const y = Y_END_SVG_PX + yDistancePercentagePx * index;
      const text = totalPercentage - DISTANCE_PERCENTAGE * index;

      if (_isXAxis) {
        return <S.Line y={y} key={index} />;
      } else {
        const PX_FOR_CENTER_TEXT = 4;
        return (
          <S.Text
            key={index}
            y={y + PX_FOR_CENTER_TEXT}
            x={35}
            textAnchor="end"
          >
            {text}
          </S.Text>
        );
      }
    });
  };

  return (
    <S.ChartContainer className="chart-container">
      <div className={"chart-left"}>
        <p className={"chart-title"}>{title}</p>
      </div>
      <div className={"chart-right"}>
        <div className={"chart-score"}>
          <S.Svg width={30}>{renderAxis(numOfStack)(false)}</S.Svg>
        </div>
        <div className="chart-data">
          {/*<div className="chart-wrapper-arrow">*/}
          <S.ChartWrapper className="chart-wrapper ">
            <S.Svg width={widthChart}>
              {renderAxis(numOfStack)(true)}
              <S.LineBottom y={320} strokeWidth={strokeOfXAxisChart} />
              {children}
            </S.Svg>
            {labelBar && labelBar}
            {labelGroup && labelGroup}
            <S.Arrows width={widthChart}>{arrows && arrows}</S.Arrows>
          </S.ChartWrapper>
          {/*</div>*/}
        </div>
      </div>
    </S.ChartContainer>
  );
}

export default ChartLayout;
