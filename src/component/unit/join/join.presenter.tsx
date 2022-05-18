import QuestionWritePresenter from "../question/write/questionwrite.presenter";
import * as S from "./join.styles";

export default function JoinPresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.WrapperLeft>
          <S.ImageBox>
            <S.Image src="/image/check.png" />
          </S.ImageBox>
        </S.WrapperLeft>
        <S.WrapperOut>
          <S.WrapperIn>
            <S.Join>Welcome to slipper!</S.Join>

            <S.Profile>
              <S.ProfileBox>
                <S.InputProfile type="text" placeholder="아이디(이메일)" />
                <S.InputProfile type="text" placeholder="닉네임" />
              </S.ProfileBox>
              <S.MyImage></S.MyImage>
            </S.Profile>
            <S.PasswordCheck type="password" placeholder="비밀번호" />
            <S.PasswordCheck type="password" placeholder="비밀번호 확인" />
            <S.Check>
              <S.TelBox>
                <S.Tel type="tel" name="phone1" />-
                <S.Tel type="tel" name="phone2" />-
                <S.Tel type="tel" name="phone3" />
              </S.TelBox>
              <S.NumberAsk>인증번호 요청</S.NumberAsk>
            </S.Check>
            <S.CheckNumber>
              <S.Input type="text" placeholder="인증번호" />
              <S.CheckEnd>인증완료</S.CheckEnd>
            </S.CheckNumber>
            <S.Introduce type="textarea" placeholder="간단한 소개글" />
            <S.JoinSlipper onClick={props.onClickSlipper}>
              슬리퍼 신기
            </S.JoinSlipper>
          </S.WrapperIn>
        </S.WrapperOut>
      </S.Wrapper>
    </>
  );
}
