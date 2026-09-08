# Mobile — Programação para Dispositivos Móveis (UTFPR)

Atividades da disciplina de PDM, feitas em **React Native com Expo**.

Os enunciados vêm do [e-book da disciplina](https://andresjesse.github.io/ebook-pdm/docs/atividades/).

## Estrutura

Este é um único projeto Expo. Cada atividade fica na sua própria pasta, e o
`App.js` importa a atividade que está sendo exibida no momento.

```
├── App.js                     # importa e renderiza a atividade atual
├── atv1/
│   └── CatalogScreen.jsx      # Atividade 1: Catálogo de Itens Dinâmico
├── app.json
└── package.json
```

## Atividades

| # | Atividade | Conteúdo praticado |
|---|-----------|--------------------|
| 1 | [Catálogo de Itens Dinâmico](atv1/CatalogScreen.jsx) | Interpolação de variáveis, loop de renderização com `.map()`, renderização condicional |

## Como rodar

```bash
npm install
npx expo start
```

Depois escolha onde abrir:

- `w` — navegador
- `a` — emulador Android
- ou escaneie o QR Code com o app **Expo Go** no celular
