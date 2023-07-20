import React from "react";
import { styled } from "styled-components";
import { Container } from "../../UI/components";
import { Input, InputField } from "../../components/Inputs";
import {
  SignUpContainer,
  SignUpEl,
  SignUpGlobError,
  SignUpList,
  SignUpSubmit,
  SignUpTitle,
} from "../SignUp/styled";
import { emailValider, passwordValider } from "../SignUp";
import axios from "axios";
import { USERS_DATA } from "../../API";
import { useDispatch } from "react-redux";
import {
  addModalWindowItem,
  removeModalWindowItem,
} from "../../store/slices/ModalWindowSlice";

const SignInEl = styled.div``;

const SignInContainer = styled(Container)``;

export const SignIn = () => {
  const [isEmailFocus, setIsEmailFocus] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("Ошибка!");
  const [isEmailError, setIsEmailError] = React.useState(false);

  const [isPasswordFocus, setIsPasswordFocus] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("Ошибка!");
  const [isPasswordError, setIsPasswordError] = React.useState(false);

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const [globError, setGlobError] = React.useState("");
  const dispatch = useDispatch();

  function InputsFocus(e: any) {
    switch (e.target.name) {
      case "email":
        setIsEmailError(false);
        setIsEmailFocus(true);
        break;
      case "password":
        setIsPasswordError(false);
        setIsPasswordFocus(true);
        break;
    }
  }

  React.useEffect(() => {
    if (passwordError === "Валидное поле!" && emailError === "Валидное поле!") {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [passwordError, emailError]);

  function InputsBlur(e: any) {
    switch (e.target.name) {
      case "email":
        setIsEmailError(true);
        setIsEmailFocus(false);
        break;
      case "password":
        setIsPasswordError(true);
        setIsPasswordFocus(false);
        break;
    }
  }

  function InputsChange(e: any) {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  }

  React.useEffect(() => {
    passwordValider(password, setPasswordError);
  }, [password]);

  React.useEffect(() => {
    emailValider(email, setEmailError);
  }, [email]);

  function formSubmit(e: any) {
    e.preventDefault();

    (async function () {
      try {
        dispatch(addModalWindowItem("Проверка данных"));
        const { data: usersData } = await axios.get(USERS_DATA);

        const upUsersData = usersData.forEach((el: any) => {
          if (el.email === email) {
            if (el.password === password) {
            } else {
              throw new Error();
            }
          }
        });
        if (!upUsersData.length) {
          throw new Error();
        }
      } catch (err) {
        console.log("sign in error");
        setGlobError("Ошибка в почте или пароле");
      } finally {
        dispatch(removeModalWindowItem("Проверка данных"));
      }
    })();
  }

  return (
    <SignUpEl>
      <SignUpContainer>
        <SignUpTitle>Войти</SignUpTitle>
        <SignUpGlobError active={globError.length > 0}>
          {globError}
        </SignUpGlobError>
        <form action="" onSubmit={(e) => formSubmit(e)}>
          <SignUpList>
            <Input
              isError={isEmailError}
              error={emailError}
              setInput={setEmail}
              input={email}
              isInputFocus={isEmailFocus}
              placehold="Введите почту"
            >
              <InputField
                name="email"
                value={email}
                onFocus={(e) => InputsFocus(e)}
                onBlur={(e) => InputsBlur(e)}
                onChange={(e) => InputsChange(e)}
              />
            </Input>
            <Input
              isError={isPasswordError}
              error={passwordError}
              setInput={setPassword}
              input={password}
              isInputFocus={isPasswordFocus}
              placehold="Введите пароль"
            >
              <InputField
                name="password"
                value={password}
                onFocus={(e) => InputsFocus(e)}
                onBlur={(e) => InputsBlur(e)}
                onChange={(e) => InputsChange(e)}
              />
            </Input>
          </SignUpList>
          <SignUpSubmit type="submit" disabled={isSubmitDisabled}>
            Отправить
          </SignUpSubmit>
        </form>
      </SignUpContainer>
    </SignUpEl>
  );
};
