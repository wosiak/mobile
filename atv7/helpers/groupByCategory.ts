// O formato de cada moto dentro de mocks/motorcycles.json
export interface Motorcycle {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
}

// O formato que o SectionList espera: o título da seção e os itens dela
export interface Section {
  title: string;
  data: Motorcycle[];
}

/**
 * Converte o array plano de 1000 motos em seções agrupadas por categoria.
 *
 * Percorre a lista UMA única vez, jogando cada moto no balde da sua categoria.
 * Fazer um .filter() por categoria passaria pelos 1000 itens a cada categoria,
 * ou seja, 7 vezes mais trabalho para o mesmo resultado.
 */
export function groupByCategory(motorcycles: Motorcycle[]): Section[] {
  const groups = new Map<string, Motorcycle[]>();

  for (const motorcycle of motorcycles) {
    const group = groups.get(motorcycle.category);

    if (group) {
      group.push(motorcycle);
    } else {
      // Primeira moto desta categoria: cria o balde
      groups.set(motorcycle.category, [motorcycle]);
    }
  }

  // Transforma o Map em array de seções, com as categorias em ordem alfabética
  return Array.from(groups, ([title, data]) => ({ title, data })).sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}
