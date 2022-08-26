import React, { useCallback } from "react";
import ChartLayout from "../ChartLayout";
import * as S from "./styled";
import { aGrowth, aTestScore } from "./data";
import {
  ClassScoreType,
  DomainScoreType,
  TestScoreResponseType,
} from "./types";

function Growth() {
  const renderBarTestScore = (_arr: DomainScoreType[], _barIndex: number) => {
    let y = 320;
    console.log("-> y", y);
    console.log("=> :::: _grounpIndex ::::", _barIndex);

    return (
      <React.Fragment>
        {/*50 => padding chart line left */}
        {/*320 - 20 => 320 end => - 20 is height of first stack*/}
        {/* - 20 => - score*/}
        {/*width={40} default with 40*/}
        {_arr.map((_domainScore, _index) => {
          y -= _domainScore.percentageScore;
          return (
            <rect
              width={40} // default
              strokeWidth="1.25" // default
              x={50 + 50 * _barIndex + 40 * _barIndex}
              y={y} // subtract height of first stack => props
              height={_domainScore.percentageScore} // height of first stack => props
              stroke={_domainScore.strokeColor} // => props
              fill={_domainScore.fillColor} // => props
              onClick={() => {
                console.log("click blue");
              }}
            />
          );
        })}

        <svg x={100} y={100} width={80} height={80}>
          <polygon
            points="15,10 65,10 65,40 72,40 40,55 8,40 15,40"
            fill={"#3197C2"}
          />
          <text x={26} y={35} fontSize={20} fill={"#fff"}>
            9%
          </text>
        </svg>
        <svg x={250} y={100} width={80} height={80}>
          <polygon
            points="15,10 65,10 65,40 72,40 40,55 8,40 15,40"
            fill={"#3197C2"}
          />
          <text x={22} y={35} fontSize={20} fill={"#fff"}>
            99%
          </text>
        </svg>
        <ArrowDownGrowth
          x={350}
          y={100}
          text={"-100%"}
          handleClick={() => {
            console.log("hello ");
          }}
        />
        <ArrowUpGrowth
          x={550}
          y={100}
          text={"-100%"}
          handleClick={() => {
            console.log("hello sasasa");
          }}
        />
      </React.Fragment>
    );
  };

  const renderChartBarTestScore = (_arr: ClassScoreType[]) => {
    return (
      <>
        {_arr.map((item, index) => {
          return renderBarTestScore(item.domainScores, index);
        })}
      </>
    );
  };

  const sortArrWithScore = (arr: TestScoreResponseType) => {
    return arr.classesScores.sort((a, b) => {
      return b.score - a.score;
    });
  };

  const newClassesScoresTestScore = sortArrWithScore(aTestScore);

  const numOfStacks = newClassesScoresTestScore[0].domainScores.length;

  const renderChartGrowth = (_arr: TestScoreResponseType[]) => {
    return (
      <>
        {_arr.map((item, index) => {
          return renderChartGroupStack(item, index);
        })}
      </>
    );
  };

  const renderChartGroupStack = (
    _arr: TestScoreResponseType,
    _groupIndex: number
  ) => {
    return (
      <>
        {_arr.classesScores.map((item, index) => {
          return renderBarTestScore(item.domainScores, _groupIndex + index);
        })}
      </>
    );
  };

  const renderChartGroupStackGrowth = (
    _arr: TestScoreResponseType[],
    _groupIndex: number
  ) => {
    return (
      <>
        {_arr.map((item, index) => {
          return renderChartGroupStack(item, _groupIndex);
        })}
      </>
    );
  };
  //-----------------------
  const $lengthGroup = 20;
  const $lengthBar = 4;
  const $lengthStack = 8;
  let widthXAxis = 0;
  const _startSpacing = 50;
  const _spacing = 20;
  const _widthBar = 40;
  if ($lengthGroup > 1) {
    widthXAxis =
      _startSpacing +
      _spacing * ($lengthGroup - 1) +
      _widthBar * $lengthBar +
      _widthBar * ($lengthGroup - 1) * $lengthBar;
  } else {
    widthXAxis =
      _startSpacing +
      _spacing * ($lengthBar - 1) +
      _widthBar * ($lengthBar - 1);
  }
  const testRender = () => {
    console.log("=> :::: widthXAxis ::::", widthXAxis);

    const arr = [];
    for (let groupIdx = 0; groupIdx < $lengthGroup; groupIdx++) {
      for (let barIdx = 0; barIdx < $lengthBar; barIdx++) {
        let x = 0;

        if ($lengthGroup > 1) {
          x =
            _startSpacing +
            _spacing * groupIdx +
            _widthBar * barIdx +
            _widthBar * groupIdx * $lengthBar;
        } else {
          x = _startSpacing + _spacing * barIdx + _widthBar * barIdx;
        }

        let y = 320;

        for (let stackIdx = 0; stackIdx < $lengthStack; stackIdx++) {
          let height = Math.floor(Math.random() * 100);
          height = (height * 300) / (100 * $lengthStack);
          y -= height; //   y -= _domainScore.percentageScore;
          // console.log("=> :::: x,y ::::", { x, y });
          arr.push(
            <rect
              width={_widthBar} // default
              strokeWidth="1.25" // default
              x={x}
              y={y} // subtract height of first stack => props
              height={height} // height of first stack => props
              stroke={"blue"} // => props
              fill={"gray"} // => props
              onClick={() => {
                console.log("click blue");
              }}
            />
          );
        }
      }
    }
    return arr;
  };
  return (
    <ChartLayout
      isStack={numOfStacks > 1}
      width={widthXAxis}
      strokeWidth={2}
      numOfStack={$lengthStack}
    >
      {/*{renderChartBarTestScore(newClassesScoresTestScore)}*/}
      {/*{renderChartGrowth(aGrowth)}*/}
      {testRender()}
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
        <text x={16} y={35} fontSize={20} fill={"#fff"}>
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
  // const onClick = () => {
  //   isFunction(handleClick) && handleClick();
  // };

  return (
    <svg x={x} y={y} width={80} height={80}>
      <g onClick={handleClick}>
        <polygon
          points="15,70 65,70 65,40 72,40 40,25 8,40 15,40"
          fill={"#3197C2"}
        />
        <text x={16} y={55} fontSize={20} fill={"#fff"}>
          {text}
        </text>
      </g>
    </svg>
  );
}
export default Growth;
type PropsBarChart = {
  isStack: boolean;
  gap: number;
  strokeWidth: number;
  numOfStack: number;
  data: any[];
};
function BarChart(props: PropsBarChart) {}

type PropsGroupBarChart = {
  strokeWidthXAxis: number;
  gap: number;
  startSpacing: number;
  isStack: boolean;
  isGroup: boolean;
  numOfGroup: number;
  numOfStack: number;
  data: any[];
};
function GroupBarChart(props: PropsGroupBarChart) {}

// const isGroup = true;
// const $lengthGroup = 4;
// const $lengthBar = 4;
// const $lengthStack = 4;
// for (let groupIdx = 0; groupIdx < $lengthGroup; groupIdx++) {
//   for (let barIdx = 0; barIdx < $lengthBar; barIdx++) {
//     const _startSpacing = 50;
//     let x = 0;
//     const _gap = 20;
//     const _widthBar = 40;
//
//     if (isGroup) {
//       x =
//         _startSpacing +
//         _gap * groupIdx +
//         _widthBar * barIdx +
//         _widthBar * groupIdx * $lengthBar;
//     } else {
//       x = _startSpacing + _gap * barIdx + _widthBar * barIdx;
//     }
//
//     let y = 320;
//
//     for (let stackIdx = 0; stackIdx < $lengthStack; stackIdx++) {
//       y -= 33; //   y -= _domainScore.percentageScore;
//       console.log("=> :::: x,y ::::", { x, y });
//     }
//   }
// }
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
