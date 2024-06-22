// utilizando async await 
export const getProdutctsAsyncAwait = async () => {
  try {
    const response = await fetch('//fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Erro ao buscar os produtos');
    }

    const data = await response.json(); // Extrai os dados JSON da resposta

    return data; // Retorna os dados processados (normalmente um array de produtos)
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error; // Lança o erro novamente para que possa ser tratado onde a função é chamada
  }
}

// promise com encadeamento  
export const getProdutctsApi = () => {
  fetch('//fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(() => console.log('Houve um erro na requisição'))
}

// Simulando uma operação assíncrona com um setTimeout
function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Completed after ${ms} milliseconds`);
    }, ms);
  });
}

delay(2000)
  .then(message => {
    console.log(message); // Imprime: "Completed after 2000 milliseconds"
  });


export const multiplesPromises = () => {
  // Fazendo múltiplas requisições HTTP em paralelo
  Promise.all([fetch('https://rickandmortyapi.com/api/character/?rick'), fetch('//fakestoreapi.com/products')])
    .then(([usersResponse, postsResponse]) => {
      return Promise.all([usersResponse.json(), postsResponse.json()]);
    })
    .then(([usersData, postsData]) => {
      // Processa os dados dos usuários e posts
      console.log(usersData, postsData);
    })
    .catch(error => {
      console.error(error);
    });
}
