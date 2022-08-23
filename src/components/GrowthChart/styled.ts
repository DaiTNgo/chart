import styled from "styled-components";

export const ReportLabel = styled.div<{ index: number }>`
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
