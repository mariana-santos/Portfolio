import {
  createContext,
  useContext,
  useState,
} from 'react';


const ConfigContext = createContext({});

const ConfigProvider = ({ children }) => {

  const defaultLanguage =  localStorage.getItem('language') ?? 'pt'
  const defaultTheme =  localStorage.getItem('theme') ?? 'light'

  const [language, setLanguage] = useState(defaultLanguage)
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ConfigContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}


function useConfig() {
  const context = useContext(ConfigContext);

  if (!context)
    throw new Error('useConfig must be used within a ModalProvider');

  return context;
}

export { ConfigProvider, useConfig };