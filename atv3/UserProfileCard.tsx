import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// Interface: define quais props o componente aceita.
// O "?" marca a prop como OPCIONAL, as outras são obrigatórias.
interface UserProfileCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  bio?: string;
  status?: 'online' | 'offline';
  onPressFollow?: () => void;
}

export default function UserProfileCard({
  name,
  role,
  avatarUrl,
  bio,
  status,
  onPressFollow,
}: UserProfileCardProps) {
  return (
    <View style={styles.card}>
      {/* Linha do topo: avatar à esquerda, nome e cargo à direita */}
      <View style={styles.header}>
        {/* O avatar fica dentro de uma View para a bolinha de status
            poder ser posicionada em cima dele */}
        <View>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />

          {/* Se a prop status não for passada, nenhuma bolinha é desenhada.
              Quando existe, o ternário escolhe a cor: verde ou cinza. */}
          {status && (
            <View
              style={[
                styles.statusDot,
                { backgroundColor: status === 'online' ? '#16a34a' : '#94a3b8' },
              ]}
            />
          )}
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </View>

      {/* Se a bio não for passada, mostramos um texto padrão no lugar */}
      <Text style={bio ? styles.bio : styles.bioEmpty}>
        {bio ? bio : 'Este usuário ainda não escreveu uma bio.'}
      </Text>

      {/* O botão só aparece se o componente pai tiver passado a função.
          Sem callback, não faz sentido mostrar um botão que não faz nada. */}
      {onPressFollow && (
        <Pressable style={styles.button} onPress={onPressFollow}>
          <Text style={styles.buttonText}>Seguir</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
    // Sombra: o iOS usa as propriedades shadow*, o Android usa elevation
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    // Imagem de rede precisa de largura e altura explícitas
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e2e8f0',
  },
  statusDot: {
    // Posição absoluta para a bolinha ficar sobre o canto do avatar
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  info: {
    // flex: 1 faz este bloco ocupar o espaço que sobra na linha
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  role: {
    fontSize: 14,
    color: '#64748b',
  },
  bio: {
    fontSize: 14,
    color: '#334155',
  },
  bioEmpty: {
    fontSize: 14,
    color: '#94a3b8',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
