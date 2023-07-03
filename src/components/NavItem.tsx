import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, styled } from "styled-components";
import { NavigationItem } from "@/types/routes";

type Props = {
  navItem: NavigationItem;
};

const StyledLink = styled(Link)<{ pathname: string }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1.1rem;

  ${({ href, pathname, theme }) =>
    href === pathname &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      div:first-child {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    div:first-child {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const Name = styled.div`
  font-weight: 300;
`;

const NavItem = ({ navItem }: Props) => {
  const { name, path, icon } = navItem;
  const pathname = usePathname();

  return (
    <StyledLink href={path} pathname={pathname} passHref>
      <IconContainer>{icon}</IconContainer>
      <Name>{name}</Name>
    </StyledLink>
  );
};

export default NavItem;
