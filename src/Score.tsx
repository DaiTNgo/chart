import React from "react";
import styled from "styled-components";
import ChartLayout from "./ChartLayout";
import { calcLeft, calcX, calcY } from "./helper";
const _data = {
  domainScores: [
    {
      domainId: 39,
      displayOrder: 2,
      domainName: "Key Ideas and Details: Literary Texts",
      domainCode: "RL_KID",
      domainColorCode: "#998675",
      percentageScore: 0,
      proficiencyLevel: "Below Proficient",
      fillColor: "#998675",
      strokeColor: "#808285",
      limitDomain: true,
    },
    {
      domainId: 40,
      displayOrder: 3,
      domainName: "Craft and Structure: Literary Texts",
      domainCode: "RL_CS",
      domainColorCode: "#E4412B",
      percentageScore: 0,
      proficiencyLevel: "Below Proficient",
      fillColor: "#E4412B",
      strokeColor: "#808285",
      limitDomain: true,
    },
    {
      domainId: 41,
      displayOrder: 6,
      domainName: "Integration of Knowledge and Ideas: Literary Texts",
      domainCode: "RL_IKI",
      domainColorCode: "#75BEE9",
      percentageScore: 0,
      proficiencyLevel: "Below Proficient",
      fillColor: "#75BEE9",
      strokeColor: "#808285",
      limitDomain: true,
    },
    {
      domainId: 42,
      displayOrder: 7,
      domainName: "Key Ideas and Details: Informational Texts",
      domainCode: "RI_KID",
      domainColorCode: "#F3CE69",
      percentageScore: 0,
      proficiencyLevel: "Below Proficient",
      fillColor: "#F3CE69",
      strokeColor: "#808285",
      limitDomain: true,
    },
    {
      domainId: 43,
      displayOrder: 10,
      domainName: "Craft and Structure: Informational Texts",
      domainCode: "RI_CS",
      domainColorCode: "#C88EB7",
      percentageScore: 0,
      proficiencyLevel: "Below Proficient",
      fillColor: "#C88EB7",
      strokeColor: "#808285",
      limitDomain: true,
    },
    {
      domainId: 44,
      displayOrder: 11,
      domainName: "Integration of Knowledge and Ideas: Informational Texts",
      domainCode: "RI_IKI",
      domainColorCode: "#00B9B4",
      percentageScore: 0,
      proficiencyLevel: "Below Proficient",
      fillColor: "#00B9B4",
      strokeColor: "#808285",
      limitDomain: true,
    },
    {
      domainId: 45,
      displayOrder: 11,
      domainName: "Integration of Knowledge and Ideas: Informational Texts",
      domainCode: "RI_IKI",
      domainColorCode: "#00B9B4",
      percentageScore: 50,
      proficiencyLevel: "Below Proficient",
      fillColor: "#00B9B4",
      strokeColor: "#808285",
      limitDomain: true,
    },
  ].slice(0, 2),
};
function Score() {
  return (
    <ChartLayout
      numberOfChart={_data.domainScores.length}
      renderLabel={() => {
        return _data.domainScores.map((item, index) => {
          return (
            <ReportLabel index={index} key={item.domainId}>
              {item.domainName}
            </ReportLabel>
          );
        });
      }}
      children={_data.domainScores.map((item, index) => {
        return (
          <Rect
            key={item.domainId}
            width={40}
            x={index}
            height={(60 * item.percentageScore) / 100 + 10}
          />
        );
      })}
    />
  );
}

export default Score;

const Rect = styled.rect.attrs(
  (props: { x: number; height: number; width: number }) => ({
    y: calcY(props.height),
    x: calcX(props.x, props.width),
    height: props.height,
  })
)`
  fill: #ed7092;
  stroke: #808285;
  stroke-width: 1;
  width: ${(props) => props.width}px;
`;

const ReportLabel = styled.p<{ index: number }>`
  width: 130px;
  position: absolute;
  left: ${(props) => calcLeft(props.index)};
  top: 100%;
  border-top: 2px solid black;
  text-align: center;
  padding-top: 8px;
  font-size: 15px;
  margin: 0;
`;
