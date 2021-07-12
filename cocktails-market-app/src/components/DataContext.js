import React, { useState } from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <DataContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </DataContext.Provider>
  );
};
