import { StyleSheet, Text, TextInput, View } from 'react-native';

// Props do campo. O "?" marca as opcionais.
interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric';
}

export default function FormInput({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  keyboardType = 'default',
}: FormInputProps) {
  return (
    <View style={styles.container}>
      {/* O label fica acima do campo */}
      <Text style={styles.label}>{label}</Text>

      {/* Quando existe erro, a borda do campo fica vermelha */}
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        keyboardType={keyboardType}
      />

      {/* A mensagem de erro só é desenhada quando a prop error tem texto */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#0f172a',
  },
  inputError: {
    borderColor: '#dc2626',
  },
  errorText: {
    fontSize: 13,
    color: '#dc2626',
  },
});
