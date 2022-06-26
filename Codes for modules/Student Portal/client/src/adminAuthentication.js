import { createContext, useState, useContext } from "react";

const AuthentcationContext = createContext(null);

export const AdminAuthentication = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const login = (admin) => {
    setAdmin(admin);
  };

  const logout = () => {
    setAdmin(null);
  };

  return (
    <AuthentcationContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthentcationContext.Provider>
  );
};

export const UseAuthentication = () => {
  return useContext(AuthentcationContext);
};
