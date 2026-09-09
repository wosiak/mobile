# Atividade 2 — Styles e Layouts (Flexbox)

Engenharia reversa da tela de busca do app **Wellhub**, a partir do print
`Screenshot_Wellhub.jpg`, usando Flexbox e `StyleSheet`.

Projeto base do professor: https://github.com/university-lessons/pdm-lesson-styles-layouts
Clonado do branch `main`, commit `768758b` ("2026.2 base code").

## O que já vinha no projeto base

- `Header/` — `LocationSelect` e `SearchBar`
- `Footer/` — três botões idênticos
- `Screen.tsx` — só um `<Text>Screen</Text>` no lugar do conteúdo

## Os 3 elementos implementados

| Arquivo | Elemento | Flexbox usado |
|---|---|---|
| `FilterChips.tsx` | Linha de chips de filtro, um selecionado e um vazado | `flexDirection: row`, `alignItems: center`, `gap` |
| `NearYou.tsx` | Seção "Near you": cabeçalho + carrossel de cards de academia | `justifyContent: space-between` no cabeçalho, coluna centralizada em cada card, `gap` no carrossel |
| `SelectButton.tsx` | Botão de ação "Select Starter" | `alignItems` + `justifyContent` para centralizar |

## Acabamento adicional

- `Footer/Button.tsx` — os três botões eram idênticos e fixos no código; passaram
  a receber `icon`, `label` e `active` por props, virando Check in / Explore / Profile
- `Header/SearchBar.tsx` — placeholder ajustado para o texto do print

## Sobre as regras do enunciado

- **Sem `position: absolute`.** A tela é uma coluna: topo fixo, `ScrollView` com
  `flex: 1` no meio (ocupa o espaço que sobra) e rodapé fixo. O botão
  "Select Starter" fica acima da barra de navegação por causa dessa ordem na
  coluna, não por posicionamento absoluto.
- **Poucos tamanhos fixos.** O quadrado da logo usa `aspectRatio`,
  então a altura vem da largura e se adapta à tela. O único
  tamanho fixo é a largura do card do carrossel (96), necessária porque itens
  em `ScrollView horizontal` não têm largura de referência.
- As logos das academias são quadrados coloridos com as iniciais, no lugar das
  imagens reais.

## Como rodar

```bash
npm install
npx expo start
```
