# Atividade 4 — useState

Tela de identificação de visitantes de um complexo turístico. O conteúdo da
tela muda conforme o estado, sem recarregar nada.

## Arquivo

- `App.tsx` — a tela inteira

## Os dois estados

```tsx
const [name, setName] = useState<string>('');
const [accessAuthorized, setAccessAuthorized] = useState<boolean>(false);
```

Os dois com tipo explícito, usando a sintaxe `useState<tipo>()`.

## Comportamento

| Situação | O que aparece |
|---|---|
| `accessAuthorized` é `false` | campo de texto e botão "Solicitar Acesso" |
| campo vazio | botão desabilitado (`disabled`) |
| `accessAuthorized` é `true` | mensagem "Acesso Liberado para: [nome]" |

O `onChangeText` sincroniza o campo com o estado `name` a cada tecla digitada.

## Bônus

Botão "Sair" na tela de acesso liberado: volta `accessAuthorized` para `false`
e limpa o `name`, devolvendo o formulário em branco.

## Como rodar

```bash
npm install
npx expo start
```
