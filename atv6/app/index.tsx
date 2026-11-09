import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  // Sorteia um número de 0 a 9 e abre a tela daquele filme
  function openRandomMovie() {
    const id = Math.floor(Math.random() * 10);
    router.push(`/movie/${id}`);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Clube de Cinema</Text>

      {/* 1) <Link>: navegação declarativa, escrita direto no JSX.
             O asChild faz o Link usar o Pressable de baixo como botão. */}
      <Link href="/home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Entrar como Convidado</Text>
        </Pressable>
      </Link>

      {/* 2) router.push(): navegação por código. O "?user=Fulano" é um
             parâmetro de consulta, que vai junto na rota. */}
      <Pressable style={styles.button} onPress={() => router.push('/home?user=Fulano')}>
        <Text style={styles.buttonText}>Entrar como Usuário Logado</Text>
      </Pressable>

      {/* 3) Rota dinâmica: o número sorteado vira parte do caminho */}
      <Pressable style={styles.button} onPress={openRandomMovie}>
        <Text style={styles.buttonText}>Ver um Filme Aleatório</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    paddingTop: 80,
    gap: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f59e0b',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
