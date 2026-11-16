import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors, useTheme } from '../contexts/ThemeContext';

// Repare: NENHUMA prop de cor. O componente busca as cores sozinho.
interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function FormInput({
  label,
  value,
  onChangeText,
  placeholder,
}: FormInputProps) {
  // Pega o tema atual direto do contexto, sem receber de ninguém
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>

      {/* As três cores do campo vêm do tema: texto, borda e placeholder */}
      <TextInput
        style={[styles.input, { color: colors.text, borderColor: colors.border }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
}

// Só o que NÃO muda com o tema fica aqui. As cores são aplicadas acima.
const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
});
