import React from "react";
import styled from "styled-components";
import { _a } from "./Growth";
type Props = {
  children: React.ReactNode;
  numberOfChart: number;
  renderLabel: () => JSX.Element[];
};
function ChartLayout({
  children,
  numberOfChart = 1,
  renderLabel,
}: Partial<Props>) {
  const _calcXCircle = (
    _index: number,
    _group: number,
    _numberOfElementBefore: number
  ) => {
    const _startXPointOfCircle = 70;
    const _distanceXPoint = 30;
    const _distanceXGroup = 60;

    const _totalDistanceXPoint =
      _numberOfElementBefore * _distanceXPoint - _distanceXPoint * _group;

    const result =
      _startXPointOfCircle +
      _group * _distanceXGroup +
      _index * _distanceXPoint +
      _totalDistanceXPoint;

    return result;
  };

  console.log(
    "%c=> :::: _calcX ::::",
    "color:orange;font-weight:bold;",
    _calcXCircle(1, 2, 10)
  );
  const _radian = 10;
  const _fraction = 60 / 20;
  const _distanceYCentralPoint = 20;
  const _startYCircle = 320;
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
  return (
    <div className={"chart-container"}>
      <div className={"chart-left"}>
        <h1>Title</h1>
      </div>
      <div className={"chart-right"}>
        <div className={"chart-score"}>
          <span className={"score-per"}>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
        </div>
        <ChartData>
          <ChartDataTop>
            <ChartWrapper>
              <Svg width={numberOfChart * 140}>
                <Line y={60 - 40} />
                <Line y={120 - 40} />
                <Line y={180 - 40} />
                <Line y={240 - 40} />
                <Line y={300 - 40} />
                <LineBottom y={360 - 40} strokeWidth={2} />
                {/*{children}*/}
                <line
                  x1="40"
                  y1="20"
                  x2="40"
                  y2="320"
                  stroke="#808285"
                  strokeWidth="2"
                />
                {/*========================*/}
                {_a.map(
                  (
                    { domainScores }: { domainScores: any[] },
                    group: number
                  ) => {
                    return domainScores.map((item: any, index: number) => {
                      let _numberOfEleBefore: number = 0;
                      for (let i = 0; i < group; i++) {
                        _numberOfEleBefore += _a[i].domainScores.length;
                      }
                      const xCircle = _calcXCircle(
                        index,
                        group,
                        _numberOfEleBefore
                      );
                      const yCircle =
                        _startYCircle - item.toPercentageScore * _fraction;

                      const heightLine =
                        item.percentageScore * _fraction -
                        _distanceYCentralPoint;

                      const xRect = xCircle - _radian;
                      const yRect = yCircle + heightLine;

                      const x1Line = xCircle;
                      const y1Line =
                        yCircle + 10 * Math.sign(item.growthPercentage); // negative

                      const x2Line = xCircle;
                      const y2Line =
                        y1Line + heightLine * Math.sign(item.growthPercentage); // positive

                      return (
                        <React.Fragment key={index}>
                          <rect
                            x={xRect}
                            y={yRect}
                            width={20}
                            height={20}
                            style={{
                              stroke: "#808285",
                              strokeWidth: 1.25,
                              fill: "#c88eb7",
                            }}
                          />
                          <line
                            x1={x1Line}
                            y1={y1Line}
                            x2={x2Line}
                            y2={y2Line}
                            stroke="#808285"
                            strokeWidth="1"
                          />
                          <circle
                            cx={xCircle}
                            cy={yCircle}
                            r="10"
                            stroke="#808285"
                            strokeWidth="1"
                            fill="#c88eb7"
                          />
                        </React.Fragment>
                      );
                    });
                  }
                )}
                <rect
                  x={60}
                  y={300}
                  width={20}
                  height={20}
                  style={{
                    stroke: "#808285",
                    strokeWidth: 1.25,
                    fill: "#c88eb7",
                  }}
                />
                <line
                  x1="70"
                  y1="20"
                  x2="70"
                  y2="300"
                  stroke="#808285"
                  strokeWidth="1"
                />
                <circle
                  cx="70"
                  cy="10"
                  r="10"
                  stroke="#808285"
                  strokeWidth="1"
                  fill="#c88eb7"
                />
                {/*========================*/}
              </Svg>
              {/*<ReportLabel index={0}>Lorem ipsum dolor sit amet.</ReportLabel>*/}
              {/*{renderLabel()}*/}
            </ChartWrapper>
          </ChartDataTop>
        </ChartData>
      </div>
    </div>
  );
}

export default ChartLayout;

const Svg = styled.svg<{ width: number }>`
  min-width: 100%;
  width: ${(prop) => prop.width}px;
  height: 360px;
`;

const Line = styled.line.attrs((props: { y: number }) => ({
  x1: "10",
  x2: "100%",
  y1: props.y,
  y2: props.y,
}))`
  stroke: #6dcff6;
  stroke-width: calc(2px / 3);
`;

const LineBottom = styled.line.attrs((props: { y: number }) => ({
  x1: "0",
  x2: "100%",
  y1: props.y,
  y2: props.y,
}))`
  stroke: #a7a9ab;
  stroke-width: ${(props) => props.strokeWidth};
`;

const ChartData = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  border-bottom: 4px solid #808285;
  overflow-x: auto;
  overflow-y: auto;
`;
const ChartDataTop = styled.div`
  //position: relative;
  //
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //flex-direction: column;
  //gap: 40px;
  //
  //min-width: 100%;
  //width: max-content;
  //height: 360px;
  //
  //padding-top: 60px;
  //padding-bottom: 40px;
  //margin-top: -50px;
`;

const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Rect = styled.rect<{ index: number; group: number }>``;
const Circle = styled.circle<{ index: number; group: number }>``;
const LineConnect = styled.line<{ index: number; group: number }>``;
