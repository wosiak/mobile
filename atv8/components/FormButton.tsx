import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors, useTheme } from '../contexts/ThemeContext';

// Também sem prop de cor nenhuma
interface FormButtonProps {
  title: string;
  onPress: () => void;
}

export default function FormButton({ title, onPress }: FormButtonProps) {
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <Pressable
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: colors.buttonText }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
