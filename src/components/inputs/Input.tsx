import styled from "styled-components";

const Input = styled.input`
  padding: 0.75em;
  width: 100%;
  border-radius: 5px;
  border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
`;

export default Input;
