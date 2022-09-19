import styled from "styled-components";

const Svg = styled.svg<{ width: number | undefined }>`
  min-width: 100%;
  width: ${(prop) => prop.width}px;
  height: 400px;
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
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  stroke: #141414;
  stroke-width: calc(2px / 3);
`;

const LineBottom = styled.line.attrs((props: { y: number }) => ({
  x1: "0",
  x2: "100%",
  y1: props.y,
  y2: props.y,
}))`
  stroke: #808285;
`;

const ChartData = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  border-bottom: 4px solid #808285;
  overflow-x: auto;
  overflow-y: auto;
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
  padding: 0 50px;

  .chart-right {
    width: calc(100% - var(--left-chart-width));
    height: 500px;
    display: flex;
  }

  .chart-left {
    width: var(--left-chart-width);

    .chart-title {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin: 0;
      color: #7a8186;
      font-size: 13.5pt;
      font-family: HelveticaNeue-Medium;
    }
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
  .arrow {
    position: absolute;
    top: 0;
    left: var(--left-chart-width);
  }
`;
export { Svg, Line, LineBottom, ChartData, ChartWrapper, ChartContainer, Text };
