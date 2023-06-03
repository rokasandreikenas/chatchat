import { sidebarNavItems } from "@/consts/routes";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <div>
      {sidebarNavItems.map((navItem) => (
        <NavItem key={navItem.name} navItem={navItem} />
      ))}
    </div>
  );
};

export default Sidebar;
