import { AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import { NavigationItem } from "@/types/routes";

export const sidebarNavItems: NavigationItem[] = [
  { name: "Messages", path: "/", icon: <AiOutlineComment /> },
  { name: "Profile", path: "/profile", icon: <AiOutlineUser /> },
];
