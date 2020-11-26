import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../shared/components/UIElements/Input";
import Button from "../shared/components/UIElements/Button";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../shared/components/UIElements/ErrorModal";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_EQUAL,
  VALIDATOR_PASSWORD,
  VALIDATOR_REQUIRE,
} from "../utils/validators";
import { useForm } from "../shared/hook/form-hook";
import { useHttpClient } from "../shared/hook/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import classes from "./SignUp.module.css";

const SignUp = (props) => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const signupSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_BACKEND_URL);
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/signup`,
        "POST",
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        { "Content-Type": "application/json" }
      );
      history.push("/login");
    } catch (err) {}
  };

  return (
    <>
      {isLoading && (
        <div>
          <LoadingSpinner asOverlay />
        </div>
      )}
      <ErrorModal error={error} onClear={clearError} />
      <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>註冊帳號</h1>
      <form className={classes.SignUp} onSubmit={signupSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="請輸入有效的E-mail。"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="name"
          type="text"
          label="暱稱"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="暱稱不得為空。"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="密碼（請輸入6位數以上密碼，並至少包含一個英文字母及阿拉伯數字）"
          validators={[VALIDATOR_PASSWORD()]}
          errorText="請輸入有效密碼。"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="confirmPassword"
          type="password"
          label="確認密碼"
          validators={[VALIDATOR_EQUAL(formState.inputs.password.value)]}
          errorText="請確認密碼！"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          註冊
        </Button>
      </form>
    </>
  );
};

export default SignUp;
