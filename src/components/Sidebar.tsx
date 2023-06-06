import { styled } from "styled-components";
import { sidebarNavItems } from "@/consts/routes";
import NavItem from "./NavItem";

const Container = styled.div`
  padding: 1rem;
`;

const Item = styled.div`
  margin-bottom: 0.75rem;
`;

const Sidebar = () => {
  return (
    <Container>
      {sidebarNavItems.map((navItem) => (
        <Item key={navItem.name}>
          <NavItem navItem={navItem} />
        </Item>
      ))}
    </Container>
  );
};

export default Sidebar;
