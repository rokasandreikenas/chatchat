import styled from "styled-components";

const Button = styled.button`
  padding: 1em 2em;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Button;
