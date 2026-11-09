# Atividade 6 — Roteamento com Expo Router

App "Clube de Cinema" com três telas, praticando navegação declarativa,
navegação por código e rotas dinâmicas com parâmetros.

## Rotas

| Arquivo | Rota | O que faz |
|---|---|---|
| `app/index.tsx` | `/` | tela inicial com os três botões |
| `app/home.tsx` | `/home` | lê o parâmetro `user` da URL |
| `app/movie/[id].tsx` | `/movie/3` | lê o `id` do caminho e mostra o filme |
| `app/_layout.tsx` | — | define a pilha de navegação (`Stack`) |

No Expo Router, **o arquivo é a rota**: `app/home.tsx` vira `/home`, e os
colchetes em `[id].tsx` marcam a parte variável do caminho.

## As três formas de navegar

| Botão | Como navega | Por quê |
|---|---|---|
| Entrar como Convidado | `<Link href="/home">` | declarativo, escrito no JSX |
| Entrar como Usuário Logado | `router.push('/home?user=Fulano')` | por código, com parâmetro de consulta |
| Ver um Filme Aleatório | `router.push('/movie/' + id)` | por código, com rota dinâmica |

## Os parâmetros

As duas telas usam o mesmo hook, `useLocalSearchParams`, mesmo os parâmetros
vindo de lugares diferentes da rota:

- `/home?user=Fulano` → parâmetro de consulta, depois do `?`
- `/movie/3` → parâmetro de caminho, do nome do arquivo `[id].tsx`

## Voltar

Os botões usam `router.back()`, que **remove a tela atual da pilha**. Usar
`router.push('/')` empilharia uma segunda tela inicial por cima das anteriores,
em vez de voltar.

## Como rodar

```bash
npm install
npx expo start
```
