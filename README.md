# Mobile — Programação para Dispositivos Móveis (UTFPR)

Atividades da disciplina de PDM, feitas em **React Native com Expo**.

Os enunciados vêm do [e-book da disciplina](https://andresjesse.github.io/ebook-pdm/docs/atividades/).

## Estrutura

Cada atividade é um projeto Expo independente, com o seu próprio
`package.json`. Rode `npm install` dentro da pasta da atividade que quiser
abrir.

```
├── atv1/    # projeto Expo em JavaScript (SDK 57)
└── atv2/    # projeto base do professor, em TypeScript + expo-router (SDK 54)
```

## Atividades

| # | Atividade | Conteúdo praticado |
|---|-----------|--------------------|
| 1 | [Catálogo de Itens Dinâmico](atv1/CatalogScreen.jsx) | Interpolação de variáveis, loop de renderização com `.map()`, renderização condicional |
| 2 | [Styles e Layouts](atv2/) | Flexbox (`flexDirection`, `justifyContent`, `alignItems`, `gap`), `StyleSheet`, componentes com props |

## Como rodar

```bash
cd atv1        # ou atv2
npm install
npx expo start
```

Depois escolha onde abrir:

- `w` — navegador
- `a` — emulador Android
- ou escaneie o QR Code com o app **Expo Go** no celular
