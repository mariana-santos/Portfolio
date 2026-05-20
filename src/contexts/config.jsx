import { createContext, useContext, useState, useMemo } from "react";
import { translations } from "../locales/index";
import { getNestedValue } from "../utils/getNestedValue";
import parse from "html-react-parser";

const ConfigContext = createContext({
  language: "pt",
  setLanguage: () => {},
  theme: "light",
  setTheme: () => {},
  t: (key) => key,
});

export const ConfigProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ?? "pt",
  );

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const t = (key) => {
    const value = getNestedValue(translations[language], key);

    if (value === undefined || value === null) {
      console.warn(`Missing translation: ${key}`);
      return;
    }

    if (typeof value === "string") {
      return parse(value);
    }

    return value;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      t,
    }),
    [language, theme],
  );

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context || typeof context.t !== "function") {
    throw new Error("useConfig must be used within ConfigProvider");
  }
  return context;
};
