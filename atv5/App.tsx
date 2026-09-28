import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import SensorPanel from './SensorPanel';

export default function App() {
  // Controla se o sensor está na tela. É o que permite testar o "unmount".
  const [sensorOn, setSensorOn] = useState<boolean>(true);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Sensor de Estacionamento</Text>

      {/* Renderização condicional: quando sensorOn vira false, o componente
          sai da tela e o React roda a função de limpeza do useEffect dele. */}
      {sensorOn && <SensorPanel />}

      <Pressable
        style={[styles.toggle, sensorOn ? styles.toggleOff : styles.toggleOn]}
        onPress={() => setSensorOn(!sensorOn)}
      >
        <Text style={styles.toggleText}>
          {sensorOn ? 'Desligar sensor' : 'Ligar sensor'}
        </Text>
      </Pressable>

      <Text style={styles.hint}>
        Abra o terminal onde o Expo está rodando para ver os logs do sensor.
      </Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    paddingTop: 80,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  toggle: {
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  toggleOn: {
    backgroundColor: '#16a34a',
  },
  toggleOff: {
    backgroundColor: '#dc2626',
  },
  toggleText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hint: {
    color: '#64748b',
    fontSize: 13,
  },
});
