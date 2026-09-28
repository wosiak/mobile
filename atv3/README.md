# Atividade 3 — Componente de Perfil de Usuário

Componente reutilizável `UserProfileCard`, que muda o que exibe conforme as
props recebidas do componente pai.

## Arquivos

- `UserProfileCard.tsx` — o componente e a interface TypeScript das props
- `App.tsx` — usa o componente três vezes, com props diferentes

## Props

| Prop | Tipo | Obrigatória |
|---|---|---|
| `name` | `string` | sim |
| `role` | `string` | sim |
| `avatarUrl` | `string` | sim |
| `bio` | `string` | não |
| `status` | `'online' \| 'offline'` | não |
| `onPressFollow` | `() => void` | não |

## Casos especiais tratados

- **Sem `bio`** → exibe o texto padrão "Este usuário ainda não escreveu uma bio."
- **Sem `status`** → a bolinha indicadora não é desenhada
- **Sem `onPressFollow`** → o botão "Seguir" não é exibido

## As três variações do App.tsx

1. **Ana Souza** — todas as props; o botão abre um `Alert`
2. **Carlos Lima** — só as obrigatórias, mais `status="offline"`
3. **Marina Alves** — com bio, sem `status` definido

## Como rodar

```bash
npm install
npx expo start
```
