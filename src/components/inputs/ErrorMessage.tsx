import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.error};
`;

export default ErrorMessage;
