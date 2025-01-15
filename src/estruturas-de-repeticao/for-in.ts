// O for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. 
// Ele percorre as chaves (propriedades) de um objeto e não os valores diretamente. 
// É menos comum que outras estruturas de iteração, mas ainda assim é útil em cenários específicos.

type Person = {
  nome: string
  idade: number
  profissao: string
}

export default function forInFile(){
  const pessoa:Person = {
    nome: "Alice",
    idade: 25,
    profissao: "Desenvolvedora"
  };

  for (const chave in pessoa) {
      console.log(`${chave}: ${pessoa[chave as keyof Person]}`);
  }
}

