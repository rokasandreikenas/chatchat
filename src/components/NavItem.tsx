import { NavigationItem } from "@/types/routes";

type Props = {
  navItem: NavigationItem;
};

const NavItem = ({ navItem }: Props) => {
  const { name, path, icon } = navItem;
  return <div>{name}</div>;
};

export default NavItem;
