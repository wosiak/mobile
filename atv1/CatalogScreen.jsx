import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Nome do usuário que vai aparecer na saudação (interpolação de variável)
const userName = 'Eduardo';

// Lista de dados (array de objetos) que será percorrida com .map()
// Tema escolhido: Garagem de Carros
const dataList = [
  { name: 'Jeep Compass', price: 145900, category: 'SUV', onSale: true },
  { name: 'Volkswagen Gol', price: 62500, category: 'Hatch', onSale: false },
  { name: 'Toyota Corolla', price: 158000, category: 'Sedan', onSale: false },
  { name: 'Fiat Toro', price: 132400, category: 'Picape', onSale: true },
];

// Tela da Atividade 1: Catálogo de Itens Dinâmico
export default function CatalogScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {/* Cabeçalho: saudação usando interpolação da variável userName */}
      <Text style={styles.greeting}>Olá, {userName}! 👋</Text>
      <Text style={styles.subtitle}>
        Temos {dataList.length} veículos disponíveis hoje.
      </Text>

      {/* Loop de renderização: cria um card para cada item do dataList.
          O segundo parâmetro (index) é usado como key, conforme pedido na atividade. */}
      {dataList.map((item, index) => (
        <View key={index} style={styles.card}>
          {/* Linha do topo: nome do item e o badge de oferta */}
          <View style={styles.cardHeader}>
            <Text style={styles.name}>{item.name}</Text>

            {/* Renderização condicional: o badge só aparece se onSale for true */}
            {item.onSale && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>OFERTA</Text>
              </View>
            )}
          </View>

          {/* Categoria do item */}
          <Text style={styles.category}>Categoria: {item.category}</Text>

          {/* Operador ternário: se estiver em promoção o preço fica verde,
              senão fica na cor padrão (cinza escuro) */}
          <Text style={[styles.price, { color: item.onSale ? '#16a34a' : '#334155' }]}>
            R$ {item.price.toFixed(2)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  badge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: '#15803d',
    fontSize: 12,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
