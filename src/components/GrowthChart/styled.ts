import styled from "styled-components";

export const ReportLabel = styled.div`
  position: absolute;
  top: 100%;
  font-size: 14.666666666px;
  transform: rotate(-45deg);
  width: 65px;
  text-align: center;
  display: inline-block;
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
`;
const Teacher = styled.p``;
const Description = styled.p``;
const Growth = styled.span`
  font-weight: bold;
`;
const Score = styled.p<{ color?: string }>`
  background-color: ${(props) => props?.color || "#ED7092"};
  text-align: center;
  color: black;
  font-family: HelveticaNeue-Medium;
  font-size: 16px;
`;
const Link = styled.p`
  cursor: pointer;
  color: #3579c1;
  text-decoration: underline;
  font-size: 16px;
  font-family: HelveticaNeue-Medium;
`;
const Color = styled.div<{ width: number; color?: string }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border: 1px solid black;
  background-color: ${(props) => props?.color || "#ED7092"};
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
  Title,
  Teacher,
  Description,
  Score,
  Link,
  Color,
  WrapperColor,
  DescriptionColor,
  Wrapper,
  Growth,
};
