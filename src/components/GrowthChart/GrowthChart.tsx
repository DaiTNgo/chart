import React, { useCallback } from "react";
import ChartLayout from "../ChartLayout";
import * as S from "./styled";

function Growth({ data }: { data: any[] }) {
  /**
   * 20% => 60px
   *
   * 320px => y start point of circle : 0%
   *
   * 310px => y start point of rect : 0%
   *
   * xCircle = _calcXCircle(.....)
   * yCircle = _startYCircle - toPercentageScore * _fraction
   *
   * xRect = xCircle - _radian;
   * yRect = yCircle + heightLine
   *
   * heightLine = _percent * _fraction - _distanceYCentralPoint
   *
   * x1Line = xCircle
   * y1Line = yCircle + 10 * Math.sign(growthPercentage) // negative
   *
   * x2Line = xCircle
   * y2Line = y1Line + heightLine * Math.sign(growthPercentage) // positive
   */
  const calcXCircle = useCallback(
    (_index: number, _group: number, _numberOfElementBefore: number) => {
      const START_X_POINT_CIRCLE = 70;
      const DISTANCE_X_POINT = 30;
      const DISTANCE_X_GROUP = 60;

      const _totalDistanceXPoint =
        _numberOfElementBefore * DISTANCE_X_POINT - DISTANCE_X_POINT * _group;

      return (
        START_X_POINT_CIRCLE +
        _group * DISTANCE_X_GROUP +
        _index * DISTANCE_X_POINT +
        _totalDistanceXPoint
      );
    },
    []
  );

  const convertPercentageToPx = useCallback((percentage: number) => {
    // 60px = 20%
    const PX = 60;
    const PERCENTAGE = 20;
    const RATIO = PX / PERCENTAGE;

    return percentage * RATIO;
  }, []);

  const calcYCircle = useCallback(
    (_startYPoint: number, _percentage: number) => {
      return _startYPoint - convertPercentageToPx(_percentage);
    },
    []
  );

  const calcNumberOfElementBefore = useCallback(
    (data: any[], _group: number) => {
      let _numberOfEleBefore: number = 0;
      for (let i = 0; i < _group; i++) {
        _numberOfEleBefore += data[i].domainScores.length;
      }

      return _numberOfEleBefore;
    },
    []
  );

  const calcWidthSvg = useCallback((data: any[]) => {
    const numberOfElementBefore = calcNumberOfElementBefore(data, data.length);
    return calcXCircle(0, data.length, numberOfElementBefore);
  }, []);

  const renderLabel = useCallback((data: any[]) => {
    return () =>
      data.map((item, index) => {
        return (
          <S.ReportLabel index={index}>
            {item.firstName} {item.lastName}
          </S.ReportLabel>
        );
      });
  }, []);

  const renderLineBreak = useCallback((data: any[]) => {
    return data.map((_, index) => {
      const numberOfElementBefore = calcNumberOfElementBefore(data, index + 1);
      const DISTANCE_X_CIRCLE_AND_LINEBREAK = 30;
      const x =
        calcXCircle(0, index + 1, numberOfElementBefore) -
        DISTANCE_X_CIRCLE_AND_LINEBREAK;

      return (
        <line
          key={index}
          x1={x}
          y1="20"
          x2={x}
          y2="320"
          stroke="#808285"
          strokeWidth="2"
        />
      );
    });
  }, []);

  const renderChart = useCallback((data: any[]) => {
    return data.map(
      ({ domainScores }: { domainScores: any[] }, group: number) => {
        return domainScores.map((item: any, index: number) => {
          const numberOfElementBefore = calcNumberOfElementBefore(data, group);

          const xCircle = calcXCircle(index, group, numberOfElementBefore);
          const yCircle = calcYCircle(START_Y_CIRCLE, item.toPercentageScore);

          const heightLine = convertPercentageToPx(
            Math.abs(item.growthPercentage)
          );

          const xRect = xCircle - RADIAN;
          const yRect = calcYCircle(START_Y_RECT, item.percentageScore);

          const x1Line = xCircle;
          const x2Line = xCircle;

          const y1Line = yRect;
          const y2Line = y1Line - heightLine * Math.sign(item.growthPercentage);

          return (
            <React.Fragment key={index}>
              <line
                x1={x1Line}
                y1={y1Line}
                x2={x2Line}
                y2={y2Line}
                stroke="#808285"
                strokeWidth="1"
              />
              <rect
                x={xRect}
                y={yRect}
                width={20}
                height={20}
                stroke={item.strokeColor}
                strokeWidth="1.25"
                fill={item.fillColor}
              />
              <circle
                cx={xCircle}
                cy={yCircle}
                r="10"
                stroke={item.toStrokeColor}
                strokeWidth="1"
                fill={item.toFillColor}
              />
            </React.Fragment>
          );
        });
      }
    );
  }, []);

  const RADIAN = 10;
  const START_Y_CIRCLE = 320;
  const START_Y_RECT = 310;
  return (
    <ChartLayout
      renderLabel={renderLabel(data)}
      strokeWidth={2}
      width={calcWidthSvg(data)}
    >
      {renderLineBreak(data)}
      {renderChart(data)}
    </ChartLayout>
  );
}

export default Growth;
