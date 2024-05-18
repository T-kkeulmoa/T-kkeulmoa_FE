import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  WhiteFormContainer,
  Input,
  SubmitButton,
  LargeTitle,
  SubTitle,
  BasicLine,
  SignUpButton,
} from "@/entities";

import { AuthService, PAGE_URL } from "@/shared";

const SignInPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const { signin } = AuthService();

  const onSubmit = (data: User.SignInReqDto) => {
    //console.log(data);
    signin(data);
  };

  return (
    <WhiteFormContainer onSubmit={handleSubmit(onSubmit)}>
      <img src="/imgs/logo.png" alt="logo" />
      <LargeTitle>T끌 모아</LargeTitle>
      <SubTitle>티끌모아 지구를 구하자</SubTitle>
      <Input
        placeholder="아이디를 입력해주세요 !!"
        {...register("id", { required: "" })}
      />
      <Input
        placeholder="비밀번호를 입력해주세요 !!"
        type="password"
        {...register("password", { required: "" })}
      />
      <SubmitButton onSubmit={handleSubmit(onSubmit)}>시작하기</SubmitButton>
      <BasicLine />
      <SignUpButton
        onClick={() => {
          navigate(PAGE_URL.SignUp);
        }}
      >
        회원가입
      </SignUpButton>
    </WhiteFormContainer>
  );
};

export default SignInPage;
