function funcaoTeste() {
  // const response = 'retorno ok'
  return response
}


export const erros = () => {
  try {
    // Código que pode lançar uma exceção
    let result = funcaoTeste();
    console.log('Resultado:', result);
  } catch (error: unknown) { // error.message | error.name | error.stack
    // Código para lidar com a exceção
    if (error instanceof Error) {
      console.log('Erro:', error);
      console.error('Ocorreu um erro:', error.message);
      console.error('Tipo de erro:', error.name);
      console.error('Rastreamento da pilha:', error.stack);
    } else {
      console.error('Erro desconhecido', error);
    }
  }
}

export default erros;