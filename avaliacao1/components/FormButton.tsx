import { Pressable, StyleSheet, Text } from 'react-native';

interface FormButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function FormButton({ title, onPress, disabled = false }: FormButtonProps) {
  return (
    <Pressable
      style={[styles.button, disabled ? styles.buttonDisabled : null]}
      onPress={onPress}
      // A prop disabled do Pressable impede o toque quando o formulário é inválido
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#16a34a',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cbd5e1',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
