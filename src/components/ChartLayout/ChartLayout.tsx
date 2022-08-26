import React, { useCallback } from "react";
import * as S from "./styled";

type Props = {
  children: React.ReactNode;
  renderLabel?: () => JSX.Element[];
  strokeWidth: number;
  width: number | undefined;
  // type of chart
  isStack: boolean;
  // render line and percentage: 1 => 100%; 5 => 500%
  numOfStack: number;
};
function ChartLayout({
  children,
  renderLabel,
  strokeWidth = 5,
  width,
  isStack = false,
  numOfStack = 1,
}: Props) {
  const renderLayout = (_isLineChart: boolean) => {
    const PERCENT = numOfStack * 100;
    const HEIGHT = 300;
    const Y_END = 20;
    let DISTANCE_PERCENTAGE = 20;
    if (isStack) {
      DISTANCE_PERCENTAGE = 50;
    }
    const numOfPercent = PERCENT / DISTANCE_PERCENTAGE;

    const arr = new Array(numOfPercent).fill(0);

    return arr.map((_, index) => {
      const yDistancePercentage = HEIGHT / numOfPercent;
      const y = Y_END + yDistancePercentage * index;
      const text = PERCENT - DISTANCE_PERCENTAGE * index;

      if (_isLineChart) {
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
        <h1>Title</h1>
      </div>
      <div className={"chart-right"}>
        <div className={"chart-score"}>
          <S.Svg width={30}>{renderLayout(false)}</S.Svg>
        </div>
        <S.ChartData>
          <S.ChartDataTop>
            <S.ChartWrapper>
              <S.Svg width={width}>
                {renderLayout(true)}
                <S.LineBottom y={320} strokeWidth={strokeWidth} />
                {children}
              </S.Svg>
              {/*{renderLabel()}*/}
            </S.ChartWrapper>
          </S.ChartDataTop>
        </S.ChartData>
      </div>
    </S.ChartContainer>
  );
}

export default ChartLayout;
