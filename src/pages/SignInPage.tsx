import { useForm } from "react-hook-form";

import {
  SignInContainer,
  Input,
  SubmitButton,
  LargeTitle,
  SubTitle,
  BasicLine,
  SignUpButton,
} from "@/entities";

import { AuthService } from "@/shared";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const { signin } = AuthService();

  const onSubmit = (data: User.SignInReqDto) => {
    console.log(data);
    //signin(data);
  };

  return (
    <SignInContainer onSubmit={handleSubmit(onSubmit)}>
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
      <SubmitButton>시작하기</SubmitButton>
      <BasicLine />
      <SignUpButton onSubmit={handleSubmit(onSubmit)}>회원가입</SignUpButton>
    </SignInContainer>
  );
};

export default SignInPage;
