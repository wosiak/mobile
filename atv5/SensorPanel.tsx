import { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

// Distância em centímetros abaixo da qual o sensor considera perigo
const DANGER_LIMIT = 20;

export default function SensorPanel() {
  // Distância lida pelo sensor, em centímetros
  const [distance, setDistance] = useState<number>(50);

  // EFEITO 1 — array de dependências VAZIO: roda uma única vez, quando o
  // componente monta. É aqui que o sistema "liga".
  useEffect(() => {
    console.log('📡 Sistema de Sensores Iniciado');

    // Enquanto o sensor estiver ligado, avisa a cada 2 segundos
    const interval = setInterval(() => {
      console.log('🟢 Sistema ativo...');
    }, 2000);

    // FUNÇÃO DE LIMPEZA: o que o efeito devolve roda quando o componente
    // é desmontado. Sem o clearInterval, o setInterval continuaria rodando
    // para sempre, mesmo com o sensor fora da tela.
    return () => {
      clearInterval(interval);
      console.log('📴 Sistema de Sensores Desligado');
    };
  }, []);

  // EFEITO 2 — depende de [distance]: roda toda vez que a distância muda.
  useEffect(() => {
    if (distance < DANGER_LIMIT) {
      Alert.alert('⚠️ PERIGO: Muito Próximo!');
    }
  }, [distance]);

  // Usado para pintar a tela de vermelho quando entra na zona de perigo
  const isDanger = distance < DANGER_LIMIT;

  return (
    <View style={[styles.panel, isDanger ? styles.panelDanger : styles.panelSafe]}>
      <Text style={styles.label}>DISTÂNCIA</Text>

      <Text style={styles.distance}>{distance} cm</Text>

      {/* Ternário: a mensagem muda conforme a zona em que está */}
      <Text style={styles.status}>
        {isDanger ? '⚠️ PERIGO: Muito Próximo!' : '✅ Distância segura'}
      </Text>

      {/* Botões para o usuário ajustar a distância */}
      <View style={styles.buttons}>
        <Pressable
          style={styles.button}
          // Math.max impede que a distância fique negativa
          onPress={() => setDistance((d) => Math.max(0, d - 5))}
        >
          <Text style={styles.buttonText}>− 5 cm</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => setDistance((d) => d + 5)}>
          <Text style={styles.buttonText}>+ 5 cm</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    borderRadius: 16,
    padding: 24,
    gap: 8,
    alignItems: 'center',
    borderWidth: 2,
  },
  panelSafe: {
    backgroundColor: '#052e16',
    borderColor: '#16a34a',
  },
  panelDanger: {
    backgroundColor: '#450a0a',
    borderColor: '#dc2626',
  },
  label: {
    color: '#94a3b8',
    fontSize: 13,
    letterSpacing: 2,
  },
  distance: {
    color: '#ffffff',
    fontSize: 56,
    fontWeight: 'bold',
  },
  status: {
    color: '#e2e8f0',
    fontSize: 16,
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
