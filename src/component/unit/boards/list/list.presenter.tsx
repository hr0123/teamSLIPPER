import Category from "../../../../commons/category";
import * as S from "./list.styles";

export default function ListPresenter() {
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.SearchBar type="text" placeholder="원하는 동네로 이동해보세요" />
        <S.SearchButton>
          <S.Serach src="/image/search.png" />
        </S.SearchButton>
      </S.WrapperTop>
      <Category />
      <S.WrapperMiddle>
        <S.Icon>만족도</S.Icon>
        <S.Categoty>카테고리</S.Categoty>
        <S.Title>제목</S.Title>
      </S.WrapperMiddle>
      <S.WrapperBottom>
        <S.Button>글쓰기</S.Button>
      </S.WrapperBottom>
    </S.WrapperOut>
  );
}