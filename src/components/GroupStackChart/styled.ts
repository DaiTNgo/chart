import styled from "styled-components";

const LabelGroup = styled.p`
  position: absolute;
  top: 100%;
  text-align: center;
  transform: rotate(-45deg);
`;

const LabelBar = styled.span`
  position: absolute;
  font-size: 15px;
  bottom: 15px;
  text-align: center;
`;

export { LabelBar, LabelGroup };
