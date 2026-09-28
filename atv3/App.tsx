import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import UserProfileCard from './UserProfileCard';

export default function App() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfis</Text>

      {/* 1. Usuário com TODAS as props. O onPressFollow abre um Alert. */}
      <UserProfileCard
        name="Ana Souza"
        role="Desenvolvedora Mobile"
        avatarUrl="https://i.pravatar.cc/150?img=47"
        bio="Trabalha com React Native há 4 anos e gosta de ensinar."
        status="online"
        onPressFollow={() => Alert.alert('Seguindo', 'Você agora segue Ana Souza.')}
      />

      {/* 2. Só as props obrigatórias, mais o status 'offline'.
             Sem bio, aparece o texto padrão. Sem callback, o botão não aparece. */}
      <UserProfileCard
        name="Carlos Lima"
        role="Designer"
        avatarUrl="https://i.pravatar.cc/150?img=12"
        status="offline"
      />

      {/* 3. Com bio, mas sem status definido: nenhuma bolinha é desenhada. */}
      <UserProfileCard
        name="Marina Alves"
        role="Product Owner"
        avatarUrl="https://i.pravatar.cc/150?img=32"
        bio="Organiza o backlog e conversa com os usuários todo dia."
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  content: {
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
  },
});
