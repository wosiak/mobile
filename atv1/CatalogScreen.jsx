import { ScrollView, StyleSheet, Text, View } from 'react-native';

const userName = 'Professor';

const dataList = [
  { name: 'Jeep Compass', price: 145900, category: 'SUV', onSale: true },
  { name: 'Volkswagen Gol', price: 62500, category: 'Hatch', onSale: false },
  { name: 'Toyota Corolla', price: 158000, category: 'Sedan', onSale: false },
  { name: 'Fiat Toro', price: 132400, category: 'Picape', onSale: true },
];

export default function CatalogScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Olá, {userName}! 👋</Text>
      <Text style={styles.subtitle}>
        Temos {dataList.length} veículos disponíveis hoje.
      </Text>

     {dataList.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.name}>{item.name}</Text>

            {item.onSale && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>OFERTA</Text>
              </View>
            )}
          </View>

          {/* Categoria do item */}
          <Text style={styles.category}>Categoria: {item.category}</Text>

           <Text style={[styles.price, { color: item.onSale ? '#16a34a' : '#334155' }]}>
            R$ {item.price.toFixed(2)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

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
