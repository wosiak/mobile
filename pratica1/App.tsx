import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import FormButton from './components/FormButton';
import FormInput from './components/FormInput';

export default function App() {
  // --- Requisito 2: aviso de carregamento ---
  const [loading, setLoading] = useState<boolean>(true);

  // --- Requisito 6: um estado para o valor de cada campo ---
  const [playerName, setPlayerName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [shirtNumber, setShirtNumber] = useState<string>('');

  // --- Requisito 6: um estado para a mensagem de erro de cada campo ---
  const [nameError, setNameError] = useState<string>('');
  const [positionError, setPositionError] = useState<string>('');
  const [numberError, setNumberError] = useState<string>('');

  // --- Requisito 7: o Switch ---
  const [hasUniform, setHasUniform] = useState<boolean>(false);

  // --- Requisito 9: controla se o botão pode ser pressionado ---
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // REQUISITO 2 — array vazio: roda uma vez, ao abrir a tela.
  // Mostra o aviso e o esconde depois de 2 segundos.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Limpeza: cancela o timeout se a tela sair antes dos 2 segundos
    return () => clearTimeout(timeout);
  }, []);

  // REQUISITO 9 — depende dos três campos: roda a cada tecla digitada.
  // Valida tudo, escreve as mensagens de erro e libera ou trava o botão.
  useEffect(() => {
    // Nome: pelo menos 3 letras
    const nameOk = playerName.trim().length >= 3;
    // O erro só aparece depois que o usuário digitou algo, para a tela
    // não abrir já cheia de mensagens vermelhas
    setNameError(playerName !== '' && !nameOk ? 'O nome precisa ter pelo menos 3 letras.' : '');

    // Posição: pelo menos 3 letras, para não aceitar algo como "z"
    const positionOk = position.trim().length >= 3;
    setPositionError(
      position !== '' && !positionOk ? 'Escreva a posição por extenso (ex.: atacante).' : ''
    );

    // Número da camisa: precisa ser um número inteiro entre 1 e 99
    const parsedNumber = Number(shirtNumber);
    const numberOk =
      shirtNumber !== '' && Number.isInteger(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 99;
    setNumberError(
      shirtNumber !== '' && !numberOk ? 'O número da camisa deve ser entre 1 e 99.' : ''
    );

    // O botão só libera quando os três campos estão válidos
    setIsFormValid(nameOk && positionOk && numberOk);
  }, [playerName, position, shirtNumber]);

  // REQUISITO 10 — mostra no console os valores de todos os campos
  function onSubmit() {
    console.log('--- Inscrição no racha ---');
    console.log('Nome do jogador:', playerName);
    console.log('Posição:', position);
    console.log('Número da camisa:', shirtNumber);
    console.log('Tem uniforme próprio:', hasUniform);
  }

  return (
    // REQUISITO 1 — SafeAreaView afasta o conteúdo da barra de status,
    // ScrollView deixa a tela rolar em celulares menores
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* REQUISITO 3 — imagem ligada ao tema */}
        <Image source={require('./assets/bola.png')} style={styles.logo} />

        <Text style={styles.title}>Inscrição no Racha</Text>
        <Text style={styles.subtitle}>Preencha seus dados para entrar na lista.</Text>

        {/* REQUISITO 2 — o aviso some sozinho depois de 2 segundos */}
        {loading ? (
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Sistema Carregado...</Text>
          </View>
        ) : null}

        {/* REQUISITOS 4 e 5 — o mesmo componente, três vezes */}
        <FormInput
          label="Nome do jogador"
          value={playerName}
          onChangeText={setPlayerName}
          error={nameError}
          placeholder="Digite seu nome"
        />

        <FormInput
          label="Posição"
          value={position}
          onChangeText={setPosition}
          error={positionError}
          placeholder="Goleiro, zagueiro, atacante..."
        />

        <FormInput
          label="Número da camisa"
          value={shirtNumber}
          onChangeText={setShirtNumber}
          error={numberError}
          placeholder="De 1 a 99"
          keyboardType="numeric"
        />

        {/* REQUISITO 7 — o Switch */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Tenho uniforme próprio</Text>
          <Switch value={hasUniform} onValueChange={setHasUniform} />
        </View>

        {/* REQUISITOS 8 e 10 */}
        <FormButton title="Confirmar inscrição" onPress={onSubmit} disabled={!isFormValid} />

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  logo: {
    width: 96,
    height: 96,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  banner: {
    backgroundColor: '#dcfce7',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  bannerText: {
    color: '#15803d',
    fontWeight: 'bold',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 15,
    color: '#0f172a',
  },
});
