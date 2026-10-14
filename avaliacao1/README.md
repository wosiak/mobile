# Avaliação 1 — Formulário

Tela de inscrição em um racha de futebol. Formulário que valida os campos em
tempo real e libera o botão só quando tudo está correto.

## Arquivos

```
avaliacao1/
├── App.tsx                   # a tela, os estados e as validações
├── components/
│   ├── FormInput.tsx         # campo reutilizável com label e erro
│   └── FormButton.tsx        # botão com Pressable
└── assets/bola.png           # imagem do tema
```

## Os 10 requisitos

| # | Requisito | Onde está |
|---|---|---|
| 1 | `SafeAreaView` e `ScrollView` | `App.tsx`, o return |
| 2 | Aviso "Sistema Carregado..." que some em 2s | `useEffect` com `[]` e `setTimeout` |
| 3 | `Image` do tema | `assets/bola.png` |
| 4 | `FormInput` reutilizável com `label`, `error` e `onChangeText` | `components/FormInput.tsx` |
| 5 | Mensagem de erro em `Text` vermelho | `styles.errorText` do `FormInput` |
| 6 | `useState` para 3 campos e para os erros | 3 estados de valor + 3 de erro |
| 7 | `Switch` | "Tenho uniforme próprio" |
| 8 | `FormButton` com `Pressable` (sem `Button` nativo) | `components/FormButton.tsx` |
| 9 | `useEffect` habilitando o botão | efeito com `[playerName, position, shirtNumber]` |
| 10 | `onSubmit` logando todos os campos | função `onSubmit` |

## As validações

| Campo | Regra | Mensagem |
|---|---|---|
| Nome do jogador | mínimo 3 letras | "O nome precisa ter pelo menos 3 letras." |
| Posição | mínimo 3 letras | "Escreva a posição por extenso (ex.: atacante)." |
| Número da camisa | inteiro entre 1 e 99 | "O número da camisa deve ser entre 1 e 99." |

O erro só aparece depois que o usuário digita alguma coisa, para a tela não
abrir cheia de mensagens vermelhas. Com o campo vazio, o botão fica travado
mas nenhum erro é exibido.

## Como rodar

```bash
npm install
npx expo start
```

O resultado do botão aparece no terminal onde o Expo está rodando.
