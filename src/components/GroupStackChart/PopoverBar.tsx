import React from "react";
import { DomainScoreType } from "./types";
import * as S from "./styled";
function PopoverBar({ data }: { data: any }) {
  return (
    <S.Wrapper>
      <S.Teacher></S.Teacher>
      <S.Description></S.Description>
      <S.WrapperColor>
        <S.Color width={20} color={"#ED7092"}></S.Color>
        <S.DescriptionColor>hihi</S.DescriptionColor>
      </S.WrapperColor>
      <S.Score color={"#ED7092"}>hahaa</S.Score>
      <S.Link>
        {/*<Link to={"/"} />*/}
        Skills
      </S.Link>
    </S.Wrapper>
  );
}

export default PopoverBar;
