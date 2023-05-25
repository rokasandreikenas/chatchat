"use client";

import { useRouter } from "next/navigation";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fafafa;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const FormItem = styled.div`
  margin-bottom: 1em;
`;

const StyledField = styled(Field)`
  padding: 0.75em;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Label = styled.div`
  font-weight: 600;
  color: #555;
`;

const HomePage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/chat");
  };

  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <FormItem>
            <Label>Email</Label>
            <StyledField type="email" name="email" required />
          </FormItem>
          <FormItem>
            <Label>Password:</Label>
            <StyledField type="password" name="password" required />
          </FormItem>
          <Button type="submit">Log in</Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default HomePage;
