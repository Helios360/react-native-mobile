import React, { createContext, useState, useEffect, ReactNode } from "react";

type UserContextType = {
  userList: any[] | null;
};

export const UserContext = createContext<UserContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [userList, setUserList] = useState<any[] | null>(null);

  useEffect(() => {
    fetch("https://example.com/users.json") // replace with real API
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  return (
    <UserContext.Provider value={{ userList }}>
      {children}
    </UserContext.Provider>
  );
};
