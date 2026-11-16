import { createContext, ReactNode, useContext, useState } from 'react';

// As cores de cada tema, num lugar só. Os componentes nunca escrevem
// cor na mão: eles pegam daqui, pelo tema que está ativo.
export const Colors = {
  light: {
    background: '#ffffff',
    text: '#0f172a',
    placeholder: '#94a3b8',
    border: '#cbd5e1',
    button: '#2563eb',
    buttonText: '#ffffff',
  },
  dark: {
    background: '#121212',
    text: '#f1f5f9',
    placeholder: '#64748b',
    border: '#334155',
    button: '#60a5fa',
    buttonText: '#0f172a',
  },
};

// PASSO 1 — os tipos: só existem dois temas, e o contexto guarda
// o tema atual mais a função que troca de um para o outro.
export type Theme = 'light' | 'dark';

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

// PASSO 2 — criar o contexto. Começa undefined porque, fora do Provider,
// não existe tema nenhum para entregar.
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// PASSO 3 — o Provider. Ele guarda o estado do tema e distribui o valor
// para TODOS os componentes que estiverem dentro dele, em qualquer nível.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  function toggleTheme() {
    setTheme((atual) => (atual === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// PASSO 4 — o hook. É por ele que os componentes leem o tema.
// O if garante que ninguém use useTheme fora do Provider: em vez de
// quebrar com um erro confuso, avisa exatamente qual foi o problema.
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme precisa ser usado dentro de um ThemeProvider');
  }

  return context;
}
