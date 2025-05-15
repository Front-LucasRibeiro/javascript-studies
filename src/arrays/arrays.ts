// Manipulação de arrays(map, filter, reduce, forEach)

const list: string[] = ["mesa", "garrafa", "mouse", "ventilador"];
const list2: number[] = [3, 6, 2, 5, 4, 1, 7];

export const getProducts = async () => {
  try {
    const response = await fetch("//fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }

    const data = await response.json(); // Extrai os dados JSON da resposta

    return data; // Retorna os dados processados (normalmente um array de produtos)
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error; // Lança o erro novamente para que possa ser tratado onde a função é chamada
  }
};

// verificar se existe algo na lista
export const checkItemHasOnlist = (item: string): boolean => {
  return list.includes(item);
};

export const getTitlesProducts = async () => {
  const products = await getProdutcts();
  console.log(products);
  const titles = products.map((product: any) => {
    return { title: product.title };
  });
  console.log("titles", titles);
  return titles;
};

export const listUnique = () => {
  // Não permitindo criar uma lista com valores repetidos
  const tags: Set<string> = new Set([]);

  tags.add("js");
  tags.add("html");
  tags.add("css");
  tags.add("js"); // esse item não será adicionado novamente
  return Array.from(tags);
};
