import { randomNumber } from "./functions";
import {
  checkItemHasOnlist,
  getProducts,
  getTitlesProducts,
  listUnic,
} from "./arrays";
import { operatorTernary } from "./novos-operadores";
import {
  everyFilter,
  filterArrayObjects,
  forEachArrayObjects,
  mapArrayObjects,
  reduceFilter,
  sliceFilter,
  someFilter,
  sortFilterAscName,
  sortFilterDescName,
} from "./filtros";
import { getProdutctsApi, multiplesPromises } from "./promises";
import erros from "./tratamento-erros";
import objetos from "./objetos";

const selector = document.querySelector("#app")!;

// selector.innerHTML += `Tem item na lista: ${checkItemHasOnlist('mouse')} <br>`
// selector.innerHTML += `Número aleatório gerado: ${randomNumber()} <br>`
// selector.innerHTML += `Operador ternário: ${operatorTernary()} <br>`
// selector.innerHTML += `Encotrando os menores item da lista com base em um item: ${findSmallerItems(5, [])} <br>`
// const objMap = JSON.stringify(mapArrayObjects())
// selector.innerHTML += `${objMap}`
// selector.innerHTML += `${forEachArrayObjects()}`
// selector.innerHTML += `${filterArrayObjects()}`
// selector.innerHTML += `${reduceFilter()}`
// selector.innerHTML += `${someFilter()}`
// selector.innerHTML += `${everyFilter()}`
// selector.innerHTML += `${sortFilterAscName()}`
// selector.innerHTML += `${sliceFilter()}`
// selector.innerHTML += `${getProducts()}`
// selector.innerHTML += `<pre>${JSON.stringify(await getTitlesProducts())}</pre>`
// selector.innerHTML += `${getProdutctsApi()}`
// selector.innerHTML += `${multiplesPromises()}`;
// selector.innerHTML += `${erros()}`;
selector.innerHTML += `${objetos()}`;
