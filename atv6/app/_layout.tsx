import { Stack } from 'expo-router';

export default function RootLayout() {
  // Stack = pilha de telas. Cada navegação empilha uma tela em cima da outra.
  // headerShown: false porque cada tela desenha o próprio botão de voltar.
  return <Stack screenOptions={{ headerShown: false }} />;
}
