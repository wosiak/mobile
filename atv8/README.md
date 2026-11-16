# Atividade 8 — Context API

Gerenciador de temas Dark/Light. Os componentes mudam de cor sozinhos quando
o tema troca, sem receber nenhuma prop de cor.

## Arquivos

```
atv8/
├── App.tsx                        # monta o Provider e a tela
├── contexts/ThemeContext.tsx      # as cores e os 4 passos do contexto
└── components/
    ├── FormInput.tsx              # consome useTheme
    └── FormButton.tsx             # consome useTheme
```

## Os 4 passos do contexto

Todos em `contexts/ThemeContext.tsx`, numerados em comentários no arquivo:

| Passo | O que é |
|---|---|
| 1 | Os tipos: `Theme` é `'light' \| 'dark'`, e o contexto carrega o tema atual e o `toggleTheme` |
| 2 | `createContext` — cria o contexto, começando `undefined` |
| 3 | `ThemeProvider` — guarda o estado e distribui para tudo que está dentro |
| 4 | `useTheme` — o hook pelo qual os componentes leem o tema |

## O problema que o contexto resolve

Sem contexto, a cor teria que descer por props: `App` passaria para `FormInput`,
que passaria para os filhos, e assim por diante. Qualquer componente no meio do
caminho precisaria receber e repassar cores que nem usa.

Com contexto, cada componente busca a cor direto da fonte:

```tsx
const { theme } = useTheme();
const colors = Colors[theme];
```

Nenhum componente recebe prop de cor. O `App.tsx` não passa cor nenhuma.

## O Switch

```tsx
<Switch value={theme === 'dark'} onValueChange={toggleTheme} />
```

O `value` mostra o estado atual do tema e o `onValueChange` chama a função do
contexto. Trocar o switch repinta a tela inteira.

## Como rodar

```bash
npm install
npx expo start
```
