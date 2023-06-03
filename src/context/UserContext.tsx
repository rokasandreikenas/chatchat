import { PropsWithChildren, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { User } from "../types/user";

export const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  handleLogIn: (user: User) => void;
  handleLogOut: () => void;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const isLoggedIn = !!user;

  const handleLogIn = (user: User) => {
    setUser(user);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, setUser, handleLogIn, handleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;