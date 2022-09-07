import React from "react";
import * as S from "./styled";
type Props = {
  teacher?: string;
  description?: string;
  score: string;
  color?: string;
  proficiencyLevel?: string;
};
function PopoverBar({
  teacher,
  description,
  color,
  score,
  proficiencyLevel,
}: Props) {
  return (
    <S.Wrapper>
      {teacher && <S.Teacher>Teacher: {teacher}</S.Teacher>}
      {description && <S.Description>({description})</S.Description>}
      <S.WrapperColor>
        <S.Color width={20} color={color}></S.Color>
        <S.DescriptionColor>{proficiencyLevel || ""}</S.DescriptionColor>
      </S.WrapperColor>
      <S.Score color={color}>Scaled Score: {score}</S.Score>
      <S.Link>
        {/*<Link to={"/"} />*/}
        Skills Proficiency
      </S.Link>
    </S.Wrapper>
  );
}

export default PopoverBar;
