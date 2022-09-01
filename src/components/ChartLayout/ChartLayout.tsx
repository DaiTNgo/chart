import React from "react";
import * as S from "./styled";

type Props = {
  children: React.ReactNode;
  renderLabelChart?: (() => JSX.Element[]) | (() => JSX.Element);
  renderLabelGroup?: (() => JSX.Element[]) | (() => JSX.Element);
  strokeOfXAxisChart?: number;
  title?: string;
  widthChart: number | undefined;
  // render line and percentage: 1 => 100%; 5 => 500%
  numOfStack?: number;
};
function ChartLayout({
  numOfStack = 1,
  strokeOfXAxisChart = 2,
  children,
  renderLabelChart,
  widthChart,
  renderLabelGroup,
  title = "DEFAULT TITLE",
}: Props) {
  const renderAxis = (_isXAxis: boolean) => {
    const PERCENT = numOfStack * 100;
    const HEIGHT_SVG_PX = 300;
    const Y_END_SVG_PX = 20;

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
          <S.ChartDataTop>
            <S.ChartWrapper>
              <S.Svg width={widthChart}>
                {renderAxis(true)}
                <S.LineBottom y={320} strokeWidth={strokeOfXAxisChart} />
                {children}
              </S.Svg>
              {renderLabelGroup && renderLabelGroup()}
              {renderLabelChart && renderLabelChart()}
            </S.ChartWrapper>
          </S.ChartDataTop>
        </S.ChartData>
      </div>
    </S.ChartContainer>
  );
}

export default ChartLayout;
