import React, { useCallback } from "react";
import ChartLayout from "../ChartLayout";
import * as S from "./styled";
import { aGrowth, aTestScore } from "./data";
import {
  ClassScoreType,
  DomainScoreType,
  TestScoreResponseType,
} from "./types";
import styled from "styled-components";

type Props = {
  data: any[];
  numOfGroup?: number;
  numOfBar?: number; // pass
  numOfStack?: number; // pass
  startSpacing: number;
  spacingBetweenChart: number;
  widthBar: number;
  title?: string;
  strokeWidth?: number;
};

function Growth(props: Props) {
  const sortArrWithScore = (arr: TestScoreResponseType) => {
    return arr.classesScores.sort((a, b) => {
      return b.score - a.score;
    });
  };

  const newClassesScoresTestScore = sortArrWithScore(aTestScore);

  const $lengthGroup = props.numOfGroup || 1; // pass
  const $lengthStack = props.numOfStack || 1; // pass
  const $lengthBar = props.numOfBar || 1; // pass

  const calcWidthAxis = () => {
    let widthXAxis = 0;
    if ($lengthGroup > 1) {
      widthXAxis =
        props.startSpacing +
        props.spacingBetweenChart * ($lengthGroup - 1) +
        props.widthBar * $lengthBar +
        props.widthBar * ($lengthGroup - 1) * $lengthBar;
    } else {
      widthXAxis =
        props.startSpacing +
        props.spacingBetweenChart * ($lengthBar - 1) +
        props.widthBar * ($lengthBar - 1);
    }
    return widthXAxis;
  };

  const calcWidth = (_groupIdx: number, _barIdx: number) => {
    let x = 0;
    if ($lengthGroup > 1) {
      x =
        props.startSpacing +
        props.spacingBetweenChart * _groupIdx +
        props.widthBar * _barIdx +
        props.widthBar * _groupIdx * $lengthBar;
    } else {
      x =
        props.startSpacing +
        props.spacingBetweenChart * _barIdx +
        props.widthBar * _barIdx;
    }
    return x;
  };

  let widthXAxis = calcWidthAxis();

  const testRender = (_data: any[]) => {
    const arr = [];
    for (let groupIdx = 0; groupIdx < $lengthGroup; groupIdx++) {
      let groupItem = [];
      if ($lengthStack > 1) {
        groupItem = props.data[groupIdx].classesScores;
      } else {
        groupItem = props.data[groupIdx].studentScores;
      }
      let yMin = 99999999;
      for (let barIdx = 0; barIdx < $lengthBar; barIdx++) {
        let y = 320;
        const x = calcWidth(groupIdx, barIdx);

        const barItem = groupItem[barIdx].domainScores;

        for (const stackItem of barItem) {
          const percentageScore = stackItem.percentageScore;
          const heightPx = (percentageScore * 300) / (100 * $lengthStack);
          y -= heightPx;
          yMin = Math.min(yMin, y);
          arr.push(
            <rect
              width={props.widthBar}
              strokeWidth="1.25" // default
              x={x}
              y={y}
              height={heightPx}
              stroke={stackItem.strokeColor}
              fill={stackItem.fillColor}
              onClick={() => {
                console.log("click blue");
              }}
            />
          );
        }
      }

      const x = calcWidth(groupIdx, 0);
      const HEIGHT_DEFAULT_SVG_ARROW = 80;

      arr.push(
        <ArrowDownGrowth
          x={x}
          y={yMin - HEIGHT_DEFAULT_SVG_ARROW}
          text={"-100%"}
          handleClick={() => {
            console.log("hello ");
          }}
        />
      );
    }
    return arr;
  };
  const renderLabelGroup = (_data: TestScoreResponseType[]) => {
    return _data.map((item, index) => {
      return (
        <Span
          style={{
            left: 50 + index * 40,
          }}
        >
          {item.label}
        </Span>
      );
    });
  };

  const renderLabelChart = (_data: ClassScoreType[]) => {
    return _data.map((item, index) => {
      return (
        <P
          key={item.classId}
          style={{
            left: 50 + 180 * index,
            transform: "translateY(40px) rotate(-45deg)",
          }}
        >
          {item.className}
        </P>
      );
    });
  };
  return (
    <ChartLayout
      widthChart={widthXAxis}
      strokeWidth={props.strokeWidth}
      numOfStack={$lengthStack}
      renderLabelGroup={() => renderLabelGroup(aGrowth)}
      renderLabelChart={() => renderLabelChart(aGrowth[0].classesScores)}
      title={props.title}
    >
      {/*{renderChartBarTestScore(newClassesScoresTestScore)}*/}
      {/*{renderChartGrowth(aGrowth)}*/}
      {testRender(props.data)}
    </ChartLayout>
  );
}

function ArrowDownGrowth({
  x,
  y,
  text,
  handleClick,
}: {
  x: number;
  y: number;
  text: string;
  handleClick: () => void;
}) {
  const _x = {
    one: 16,
    two: 22,
    three: 26,
  };
  return (
    <svg x={x} y={y} width={80} height={80}>
      <g onClick={handleClick}>
        <polygon
          points="15,10 65,10 65,40 72,40 40,55 8,40 15,40"
          fill={"#3197C2"}
        />
        <text x={16} y={35} fontSize={16} fill={"#fff"}>
          {text}
        </text>
      </g>
    </svg>
  );
}

function ArrowUpGrowth({
  x,
  y,
  text,
  handleClick,
}: {
  x: number;
  y: number;
  text: string;
  handleClick?: () => void;
}) {
  const _x = {
    one: 16,
    two: 22,
    three: 26,
  };

  return (
    <svg x={x} y={y} width={80} height={80}>
      <g onClick={handleClick}>
        <polygon
          points="15,70 65,70 65,40 72,40 40,25 8,40 15,40"
          fill={"#3197C2"}
        />
        <text x={16} y={55} fontSize={16} fill={"#fff"}>
          {text}
        </text>
      </g>
    </svg>
  );
}

export default Growth;

/**
 *                          .||
 *                     ||.  .||                 ||
 *   START_SPACING     ||.||.||  _spacing       ||.||
 *<------------------> ||.||.||<-----------> ||.||.||
 *                     group:0               group:1
 *                bar:0| bar:1 | bar2 --- bar:0 | bar:1 | bar:2
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

const P = styled.p`
  position: absolute;
  top: 100%;
  width: calc(40px * 4);
  text-align: center;
`;

const Span = styled.span`
  font-size: 15px;
  position: absolute;
  top: 100%;
  width: 40px;
`;
