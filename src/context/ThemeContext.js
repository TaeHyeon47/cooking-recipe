// This function allows us to create a new context object.
import { createContext } from 'react';

// context object를 ThemeContext으로 export 한다.
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // custom logic

  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  );
}
