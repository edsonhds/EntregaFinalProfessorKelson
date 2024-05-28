import React, { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "LIGHT",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("LIGHT");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "LIGHT" ? "DARK" : "LIGHT"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
