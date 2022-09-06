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

const Title = styled.h3`
  font-weight: bold;
`;
const Teacher = styled.p``;
const Description = styled.p``;
const Score = styled.p<{ color: string }>`
  background-color: ${(props) => props.color};
  text-align: center;
  color: black;
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
`;
const Link = styled.p`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  font-size: 16px;
  font-family: HelveticaNeue-Medium;
`;
const Color = styled.div<{ width: number; color: string }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;
const DescriptionColor = styled.p`
  margin: 0;
`;
const WrapperColor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Wrapper = styled.div`
  > * {
    margin: 0 0 5px 0;
  }
`;
export {
  ReportLabel,
  LabelBar,
  LabelGroup,
  Title,
  Teacher,
  Description,
  Score,
  Link,
  Color,
  WrapperColor,
  DescriptionColor,
  Wrapper,
};
