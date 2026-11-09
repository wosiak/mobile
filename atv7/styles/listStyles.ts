import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  // Cabeçalho da seção: fundo escuro e negrito, para destacar a categoria
  sectionHeader: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  model: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  details: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  // Rodapé da seção: o total de motos daquela categoria
  sectionFooter: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#475569',
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 12,
  },
});
