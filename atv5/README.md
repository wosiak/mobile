# Atividade 5 — useEffect

Simulação de um sensor de estacionamento, praticando o ciclo de vida do
componente: o que roda ao montar, o que roda quando um valor muda, e o que
roda ao desmontar.

## Arquivos

- `SensorPanel.tsx` — o sensor, com os dois `useEffect`
- `App.tsx` — liga e desliga o sensor, para testar o desmonte

## Os três casos de useEffect

| Caso | Dependências | O que faz |
|---|---|---|
| Inicialização | `[]` (vazio) | loga "📡 Sistema de Sensores Iniciado" e cria o `setInterval` de 2 segundos |
| Monitoramento | `[distance]` | dispara o `Alert` de perigo quando a distância fica abaixo de 20 cm |
| Finalização | `return` do primeiro efeito | `clearInterval` e loga "📴 Sistema de Sensores Desligado" |

## Como testar cada um

1. **Inicialização** — abra o app e olhe o terminal do Expo: aparece a mensagem
   de início e, a cada 2 segundos, "🟢 Sistema ativo..."
2. **Monitoramento** — toque em "− 5 cm" até a distância ficar abaixo de 20:
   o painel fica vermelho e o alerta aparece
3. **Finalização** — toque em "Desligar sensor": o painel some, o log de
   desligamento aparece e os logs de 2 em 2 segundos param

O botão "Desligar sensor" funciona por renderização condicional
(`{sensorOn && <SensorPanel />}`), que é o jeito de provocar o desmonte pedido
no enunciado.

## Bônus

Estilização: painel escuro que troca de cor conforme a zona — verde para
distância segura, vermelho na zona de perigo.

## Como rodar

```bash
npm install
npx expo start
```

Os logs aparecem no terminal onde o Expo está rodando.
