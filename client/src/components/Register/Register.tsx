import logo from "./../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Register.css";
import { AnimatedPage } from "../../AnimatedPage";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import {
  chakra,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { UserSchema, resolver } from "../../validation";
import { useState } from "react";

export const Register = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (data: UserSchema) => {
    console.log(data);
  };

  const methods = useForm<UserSchema>({
    context: {},
    resolver,
    criteriaMode: "all",
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  return (
    <>
      <AnimatedPage>
        <div className="container form-container">
          <img src={logo} alt="CHICAGO BULLS" />
          <chakra.form id="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="input">
              <FormControl
                isInvalid={Boolean(methods.formState.errors.username)}
              >
                <div className="labels">
                  <FormLabel>{t("Name")}</FormLabel>
                  <NavLink className="register-input" to="/">
                    {t("GoHome")}
                  </NavLink>
                </div>
                <input
                  type="text"
                  id="username"
                  {...methods.register("username")}
                  placeholder={t("YourName")}
                />
                {methods.formState.errors.username && (
                  <FormErrorMessage id="errorinput">
                    {t(methods.formState.errors.username?.message!)}
                  </FormErrorMessage>
                )}
              </FormControl>
            </div>

            <div className="input">
              <FormControl isInvalid={Boolean(methods.formState.errors.email)}>
                <FormLabel>Email</FormLabel>
                <input
                  type="email"
                  id="email"
                  {...methods.register("email")}
                  placeholder="abcdemail@gmail.com"
                />
                {methods.formState.errors.email && (
                  <FormErrorMessage id="errorinput">
                    {t(methods.formState.errors.email?.message!)}
                  </FormErrorMessage>
                )}
              </FormControl>
            </div>

            <div className="input">
              <FormControl
                isInvalid={Boolean(methods.formState.errors.password)}
              >
                <FormLabel>{t("Password")}</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder={t("EnterPassword")}
                    {...methods.register("password")}
                  />
                  <InputRightElement marginRight="2px" width="4.5rem">
                    <Button id="passbtn" h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? t("hide") : t("show")}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {methods.formState.errors.password && (
                  <FormErrorMessage id="errorinput">
                    {t(methods.formState.errors.password?.message!)}
                  </FormErrorMessage>
                )}
              </FormControl>
            </div>
            <div className="register-btn">
              <button type="submit">{t("Register")}</button>
              <Link to="/login" id="login">
                {t("HaveAccount")}
              </Link>
            </div>
          </chakra.form>
        </div>
      </AnimatedPage>
    </>
  );
};
