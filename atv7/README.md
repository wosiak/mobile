# Atividade 7 — Listas

Catálogo de 1000 motocicletas agrupadas por categoria, exibidas com
`SectionList`.

## Arquivos

```
atv7/
├── App.tsx                      # a tela com o SectionList
├── mocks/motorcycles.json       # os 1000 itens
├── helpers/groupByCategory.ts   # a lógica de agrupamento
└── styles/listStyles.ts         # os estilos
```

A separação em três arquivos atende a regra do enunciado: estilos e lógica de
tratamento de dados ficam fora da tela.

## O agrupamento

O arquivo chega como um array plano de 1000 motos. O `SectionList` precisa de
outro formato: uma lista de seções, cada uma com `title` e `data`.

```ts
// de: [{ model, brand, year, category }, ...]
// para: [{ title: 'Adventure', data: [...] }, ...]
```

A função percorre a lista **uma única vez**, jogando cada moto no balde da sua
categoria. Um `.filter()` por categoria passaria pelos 1000 itens a cada uma
das 7 categorias — sete vezes mais trabalho para o mesmo resultado.

O agrupamento roda uma vez, quando o arquivo é carregado, e não a cada
redesenho da tela: os dados são fixos.

## Os dados

| | |
|---|---|
| Motos | 1000 |
| Categorias | 7 (Adventure, Classic, Cruiser, Naked, Off-Road, Sport, Touring) |
| Marcas | 10 |
| Anos | 1974 a 2023 |

## A tela

- Cada item mostra **modelo**, **marca** e **ano**
- O cabeçalho da categoria tem fundo escuro e negrito, e fica grudado no topo
  enquanto a seção rola (`stickySectionHeadersEnabled`)
- **Desafio extra:** ao fim de cada seção, "Total: X motocicletas"

## Como rodar

```bash
npm install
npx expo start
```
