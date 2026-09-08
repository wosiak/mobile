import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// Tela da atividade 1
import CatalogScreen from './CatalogScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CatalogScreen />
      <StatusBar style="auto" />
    </View>
  );
}
