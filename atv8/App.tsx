import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import { Colors, ThemeProvider, useTheme } from './contexts/ThemeContext';

export default function App() {
  // O App só monta o Provider. Quem consome o tema é a tela de dentro —
  // useTheme não funcionaria aqui, porque este componente está FORA do Provider.
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}

function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  const colors = Colors[theme];

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    // O fundo da tela também vem do tema
    <SafeAreaView style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Minha Conta</Text>

      {/* Nenhuma cor é passada para os componentes abaixo.
          Eles pegam tudo do contexto por conta própria. */}
      <FormInput
        label="Nome"
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />

      <FormInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
      />

      {/* O Switch liga a interface ao contexto:
          value mostra o tema atual, onValueChange troca o tema */}
      <View style={styles.switchRow}>
        <Text style={[styles.switchLabel, { color: colors.text }]}>Modo escuro</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      <FormButton title="Salvar" onPress={() => console.log(name, email)} />

      {/* A barra de status acompanha o tema: ícones claros no fundo escuro */}
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 15,
  },
});
