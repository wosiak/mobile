# Atividade 2 — Styles e Layouts (Flexbox)

Engenharia reversa da tela de busca do app **Wellhub**, a partir do print
`Screenshot_Wellhub.jpg`, usando Flexbox e `StyleSheet`.

Projeto base do professor: https://github.com/university-lessons/pdm-lesson-styles-layouts
Clonado do branch `main`, commit `768758b` ("2026.2 base code").

## O que já vinha no projeto base

- `Header/` — `LocationSelect` e `SearchBar`
- `Footer/` — três botões idênticos
- `Screen.tsx` — só um `<Text>Screen</Text>` no lugar do conteúdo

## Elementos implementados nesta atividade

| Componente | O que é | Flexbox usado |
|---|---|---|
| `Header/CategoryTabs.tsx` | Abas de categoria roláveis, com barra na aba ativa | `ScrollView horizontal`, `gap`, `alignItems`, `alignSelf: stretch` |
| `Filters/Chip.tsx` | Chip de filtro em duas versões (preenchido e vazado) | `flexDirection: row`, `alignItems: center`, `gap` |
| `Filters/index.tsx` | Linha de filtros | `flexDirection: row`, `gap` |
| `gyms.ts` | Lista de academias e o tipo `Gym`, usados pelas duas seções | — |
| `NearYou/GymCard.tsx` | Card da academia: logo, nome, nota e distância | coluna com `alignItems: center`, linhas internas com `gap` |
| `NearYou/MapPreview.tsx` | Prévia do mapa com os pins | `flexDirection: row`, `justifyContent: space-around`, `aspectRatio` |
| `NearYou/index.tsx` | Seção "Near you" com carrossel horizontal | `justifyContent: space-between` no cabeçalho, carrossel com `gap` |
| `TopPicks/index.tsx` | Seção "Top picks for you" (reaproveita o `GymCard`) | carrossel horizontal com `gap` |
| `PrimaryButton.tsx` | Botão de ação "Select Starter" | `alignItems`/`justifyContent` para centralizar |
| `Footer/Button.tsx` | Passou a receber `icon`, `label` e `active` por props | coluna com `alignItems: center`, `gap` |

## Sobre as regras do enunciado

- **Sem `position: absolute`.** A tela é uma coluna: topo fixo, `ScrollView`
  com `flex: 1` no meio (ocupa o espaço que sobra) e rodapé fixo. O botão
  "Select Starter" fica acima da barra de navegação por causa dessa ordem na
  coluna, não por posicionamento absoluto.
- **Poucos tamanhos fixos.** O card do mapa e o quadrado da logo usam
  `aspectRatio`, então a altura vem da largura e se adapta à tela. O único
  tamanho fixo é a largura do card do carrossel (96), necessária porque itens
  em `ScrollView horizontal` não têm largura de referência.
- As logos das academias são quadrados coloridos com as iniciais, no lugar das
  imagens reais.

## Como rodar

```bash
npm install
npx expo start
```
