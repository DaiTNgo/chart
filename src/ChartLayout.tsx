import React from "react";
import styled from "styled-components";
import { _a } from "./Growth";

type Props = {
  children: React.ReactNode;
  numberOfChart: number;
  renderLabel: () => JSX.Element[];
  strokeWidth: number;
  width: number | undefined;
};
function ChartLayout({
  children,
  numberOfChart = 1,
  renderLabel,
  strokeWidth = 5,
  width,
}: Props) {
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
              <Svg width={width}>
                <Line y={60 - 40} />
                <Line y={120 - 40} />
                <Line y={180 - 40} />
                <Line y={240 - 40} />
                <Line y={300 - 40} />
                <LineBottom y={360 - 40} strokeWidth={2} />
                {children}
              </Svg>
              {renderLabel()}
            </ChartWrapper>
          </ChartDataTop>
        </ChartData>
      </div>
    </div>
  );
}

export default ChartLayout;

const Svg = styled.svg<{ width: number | undefined }>`
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
