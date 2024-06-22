// Filtros
type Person = {
  name: string,
  age: number,
  profession: string
  active?: boolean
}

export const listPerson: Person[] = [
  { name: 'Lucas', age: 32, profession: 'Programador' },
  { name: 'Ana', age: 28, profession: 'Designer' },
  { name: 'Carlos', age: 35, profession: 'Gerente' }
]

// metodo filter, retorna um novo array com os objetos filtrados 
export const filterArrayObjects = (): string[] => {
  const personAgeMore30: Person[] = listPerson.filter((person) => person.age > 30)
  const filterName: string[] = personAgeMore30.map((person) => person.name)

  // retorna pessoas com idade maior que 30, retornando apenas os nomes delas  
  return filterName
}

// metodo find retorna apenas o primeiro elemento que satisfaça a condição do filtro
export const findArrayObjects = (): string => {
  const ageMore30: Person | undefined = listPerson.find((person) => person.age > 30)

  return JSON.stringify(ageMore30)
}

// retorna um novo array 
export const mapArrayObjects = (): Person[] => {
  const setActive = listPerson.map((item) => ({
    ...item, // fazendo uma cópia do itens do array para não alterar o array original
    active: true
  }))
  return setActive
}

// não retorna um novo array - melhor usado quando quer apenas fazer iterações sem modificar o array original
export const forEachArrayObjects = () => {
  listPerson.forEach((item) => {
    console.log(item.name)
  })
}

// retorna um unico valor utilizado para acumular valores
export const reduceFilter = () => {
  const sumAgePersons = listPerson.reduce((acc, num) => acc + num.age, 0)
  console.log(sumAgePersons)
}


// verifica se existe algum item no array que satisfaça a condicão
export const someFilter = () => {
  const array: number[] = [1, 2, 3, 4, 5];

  // verifica se existe algum elemento igual a 3
  const existNumber3 = (element: number) => element === 3;
  console.log(array.some(existNumber3));
}

// every - verifica de todos elementos satisfazem a condição
export const everyFilter = (): boolean => {
  const numbersList: number[] = [3, 4, 5];

  // condicional se todos elementos são maiores que 2
  const moreThan2 = (element: number) => element > 2;
  return numbersList.every(moreThan2)
}

// sort - ordena os elementos
export const sortFilterAscName = () => {
  // ordenação por nome em ordem crescente
  const orderPersonAsc = listPerson.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  });

  return JSON.stringify(orderPersonAsc)
}

export const sortFilterDescName = () => {
  // ordenação por nome em ordem decrescente
  const orderPersonDesc = listPerson.sort((a, b) => {
    if (a.name > b.name) { return -1; }
    if (a.name < b.name) { return 1; }
    return 0;
  });

  return JSON.stringify(orderPersonDesc)
}


// slice - retorna uma parte de um array em um novo array sem alterar o array original
export const sliceFilter = (): number[] => {
  const numbers = [1, 2, 3, 4, 5];
  const slicedArray = numbers.slice(3, 5); // retorna os dois ultimos elementos do array - posicao inicial e onde deve parar
  return slicedArray
}


