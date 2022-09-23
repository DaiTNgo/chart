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
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  stroke: #141414;
  stroke-width: 0;
  color: #141414;
`;

const LineBottom = styled.line.attrs((props: { y: number }) => ({
  x1: "0",
  x2: "100%",
  y1: props.y,
  y2: props.y,
}))`
  stroke: #808285;
  stroke-width: 2;
`;

const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50px;
`;

const ChartContainer = styled.div`
  --left-chart-width: 30px;
  --padding-bottom: 55px;
  --width-score: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px 0 0;

  .chart-right {
    width: calc(100% - var(--left-chart-width));
    //height: 415px;
    display: flex;
    position: relative;
  }

  .chart-left {
    width: var(--left-chart-width);
    margin-left: 30px;
    margin-right: 10px;

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
    width: var(--width-score);
    height: 100%;
    border-bottom: 4px solid #808285;
    border-right: 4px solid #808285;
    display: flex;
    flex-direction: column;
    gap: 42px;
    align-items: center;

    padding-bottom: var(--padding-bottom);
    padding-top: 50px;
  }

  .score-per {
    margin-top: 12px;
  }

  .chart-data {
    width: calc(100% - var(--width-score));
    border-bottom: 4px solid #808285;
    overflow-x: auto;
    overflow-y: auto;

    &::-webkit-scrollbar {
      height: 13px;
      width: 13px;
    }

    /* Track */

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }

    /* Handle on hover */

    &::-webkit-scrollbar-thumb:hover {
      background: #c1c1c1;
      cursor: pointer;
    }
  }
`;

const Arrows = styled.div<{ width?: number }>`
  position: absolute;
  top: 50px;
  //left: var(--left-chart-width);
  left: 0;
  width: ${(props) => props.width}px;
`;
export { Svg, Line, LineBottom, ChartWrapper, ChartContainer, Text, Arrows };
