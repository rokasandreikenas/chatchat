import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import Sidebar from "@/components/Sidebar";

const Layout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 80%;
  height: 80%;
`;

const SidebarContainer = styled.div`
  min-width: 300px;
  border-right: ${({ theme }) => `1px solid ${theme.colors.border}`};
`;

const ProtectedLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        {children}
      </Container>
    </Layout>
  );
};

export default ProtectedLayout;
