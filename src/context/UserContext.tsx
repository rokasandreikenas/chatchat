import { PropsWithChildren, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { User } from "../types/user";

export const UserContext = createContext<{
  user: User | undefined;
  isLoggedIn: boolean;
  handleLogIn: (user: User) => void;
  handleLogOut: () => void;
}>({
  user: undefined,
  isLoggedIn: false,
  handleLogIn: () => ({}),
  handleLogOut: () => ({}),
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | undefined>("user", undefined);
  const isLoggedIn = !!user;

  const handleLogIn = (user: User) => {
    setUser(user);
  };

  const handleLogOut = () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, handleLogIn, handleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
