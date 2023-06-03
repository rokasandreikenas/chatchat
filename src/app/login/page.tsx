"use client";

import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import FormikInput from "@/components/formik/FormikInput";
import { UserContext } from "@/context/UserContext";
import { User } from "@/types/user";
import { loginFormInitialValues, loginValidationSchema } from "./const";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
  width: 500px;
`;

const FormItem = styled.div`
  margin-bottom: 1em;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 0.5em;
  width: 100%;
`;

const LoginPage = () => {
  const router = useRouter();
  const { handleLogIn } = useContext(UserContext);

  const handleSubmit = (user: User) => {
    handleLogIn(user);
    router.push("/");
  };

  return (
    <Container>
      <Formik
        initialValues={loginFormInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <FormItem>
            <FormikInput type="email" name="email" label="Email" required />
          </FormItem>
          <FormItem>
            <FormikInput
              type="password"
              name="password"
              label="Password"
              required
            />
          </FormItem>
          <StyledButton type="submit">Log in</StyledButton>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default LoginPage;
