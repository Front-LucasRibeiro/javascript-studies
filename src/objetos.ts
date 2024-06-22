// Propriedades e métodos de objetos
// Desestruturação de objetos e arrays
// Spread operator e rest parameters

export default function objetos() {
  type Pessoa = {
    nome: string;
    idade: number;
    profissao: string;
  }

  const pessoa: Pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };

  // Acessando propriedades
  // console.log(pessoa.nome); // João
  // console.log(pessoa["idade"]); // 30

  // Modificando propriedades
  pessoa.idade = 31;
  pessoa["profissao"] = "Engenheiro de Software";

  type Sum = {
    a: string
    b: string
  }

  // Métodos de Objetos 
  const calculadora = {
    somar: function (a: number, b: number): number {
      return a + b;
    },
  };

  // console.log(calculadora.somar(5, 3)); // 8


  // Desestruturação de Objetos
  const usuario = {
    nome: "Ana",
    idade: 25,
    email: "ana@example.com"
  };

  const { nome, idade, email } = usuario;
  // console.log(nome)

  // O spread operator(...) permite expandir elementos de um array ou propriedades de um objeto.
  const numeros1 = [1, 2, 3];
  const numeros2 = [4, 5, 6];

  const todosNumeros = [...numeros1, ...numeros2];
  // console.log(todosNumeros); // [1, 2, 3, 4, 5, 6]

  // FOR IN 
  for (const prop in pessoa) {
    if (pessoa.hasOwnProperty(prop)) {
      console.log(pessoa[prop as keyof Pessoa])
    }
  }

  // Object Keys 
  Object.keys(pessoa).forEach(prop => {
    console.log(`${prop}: ${pessoa[prop as keyof Pessoa]}`);
  });

  // Object.entries() - retorna um array de pares [key, value]. Esta abordagem pode ser útil quando você precisa tanto da chave quanto do valor.
  Object.entries(pessoa).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // obter somente values  
  Object.values(pessoa).forEach(value => {
    console.log(value);
  });

  // Rest Parameters 
  function processarDados({ nome, ...resto }: Pessoa) {
    console.log(`Nome: ${nome}`);
    console.log('Outras propriedades:');
    console.log(resto);
  }

  processarDados(pessoa);
}