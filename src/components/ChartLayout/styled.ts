import styled from "styled-components";

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

const Text = styled.text`
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

const ChartContainer = styled.div`
  --left-chart-width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  padding: 0 50px;
  .chart-left {
    width: var(--left-chart-width);
    .chart-title {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin: 0;
      color: #7a8186;
      font-size: 13.5pt;
    }
  }
  .chart-right {
    width: calc(100% - var(--left-chart-width));
    height: 500px;
    display: flex;
  }
  .chart-score {
    width: 50px;
    height: 100%;
    border-bottom: 4px solid #808285;
    border-right: 4px solid #808285;
    display: flex;
    flex-direction: column;
    gap: 42px;
    align-items: center;
  }

  .score-per {
    margin-top: 12px;
  }
`;
export {
  Svg,
  Line,
  LineBottom,
  ChartData,
  ChartDataTop,
  ChartWrapper,
  ChartContainer,
  Text,
};
