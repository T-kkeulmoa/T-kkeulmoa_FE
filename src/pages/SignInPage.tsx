import {
  BackgroundContainer,
  Input,
  SubmitButton,
  LargeTitle,
  SubTitle,
} from "@/entities";

const SignInPage = () => {
  return (
    <BackgroundContainer>
      <img src="/imgs/logo.png" alt="logo" />
      <LargeTitle>T끌 모아</LargeTitle>
      <SubTitle>티끌모아 지구를 구하자</SubTitle>
      <Input placeholder="아이디를 입력해주세요 !!"></Input>
      <Input placeholder="비밀번호를 입력해주세요 !!"></Input>
      <SubmitButton>시작하기</SubmitButton>
    </BackgroundContainer>
  );
};
export default SignInPage;
