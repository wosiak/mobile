import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// Atividade que está sendo exibida no momento.
// Para trocar de atividade, basta mudar este import e a tag lá embaixo.
import CatalogScreen from './atv1/CatalogScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CatalogScreen />
      <StatusBar style="auto" />
    </View>
  );
}
