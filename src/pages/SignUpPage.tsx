import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Background,
  FormContainer,
  SubmitButton,
  MiddleTitle,
  Height,
  TransparencyInput,
} from "@/entities";

import { PAGE_URL } from "@/shared";

const SignUpPage = () => {
  const [step, setStep] = useState<number>(0);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = (data: User.SignInReqDto) => {};

  return (
    <>
      <Background src="/backgrounds/signup_background.jpg" alt="background" />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Height height={"28%"} />
        <MiddleTitle>T끌모아에 가입하고,</MiddleTitle>
        <MiddleTitle>작은 실천으로 큰 변화를 만들어보세요!</MiddleTitle>
        <Height height={"10%"} />
        {step == 0 ? (
          <>
            <TransparencyInput
              placeholder="원하는 아이디를 입력해주세요 !!"
              {...register("id", { required: "" })}
            />
            <TransparencyInput
              placeholder="원하는 비밀번호를 입력해주세요 !!"
              type="password"
              {...register("password", { required: "" })}
            />
          </>
        ) : step == 1 ? (
          <>
            <TransparencyInput
              placeholder="당신의 이름은 무엇인가요 ?"
              {...register("id", { required: "" })}
            />
            <Height height={"60px"} />
          </>
        ) : step == 2 ? (
          <>
            <TransparencyInput
              placeholder="원하는 닉네임은 무엇인가요 ?"
              {...register("id", { required: "" })}
            />
            <Height height={"60px"} />
          </>
        ) : null}
        <Height height={"26%"} />
        <SubmitButton
          onClick={() => {
            if (step == 2) navigate(PAGE_URL.SignIn);
            else setStep(step + 1);
          }}
        >
          {step == 2 ? "시작하기" : "다음"}
        </SubmitButton>
      </FormContainer>
    </>
  );
};

export default SignUpPage;
