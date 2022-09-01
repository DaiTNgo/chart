import styled from "styled-components";
const ReportLabel = styled.div<{ index: number }>`
  position: absolute;
  // 180 distance between each label + 130 start;
  left: ${(props) => props.index * 180 + 130}px;
  top: 345px;
  font-size: 14.666666666px;
  transform: translate(-75%, 0%) rotate(-45deg);
  transform-origin: top right;
  width: 65px;
  text-align: center;
  display: inline-block;
`;

const LabelGroup = styled.p`
  position: absolute;
  top: 100%;

  width: 40px;
  text-align: center;
  transform: translateY(40px) rotate(-45deg);
`;

const LabelBar = styled.span`
  position: absolute;

  font-size: 15px;
  top: 100%;
  width: 40px;
  text-align: center;
`;

export { ReportLabel, LabelBar, LabelGroup };
