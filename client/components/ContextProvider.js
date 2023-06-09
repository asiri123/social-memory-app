import React from "react";
export const DataContext = createContext(null);

const ContextProvider = ({ children }) => {
  const person = "john";
  const data = [
    { id: 1, name: "Harry", age: "23" },
    { id: 2, name: "jerry", age: 43 },
  ];
  const clickFunction = () => {
    console.log("clicked");
  };
  return (
    <DataContext.Provider value={{ person, data, clickFunction }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
