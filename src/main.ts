
import { randomNumber } from './functions';
import { checkItemHasOnlist } from './arrays';
import { operatorTernary } from './novos-operadores'

document.querySelector('#app')!.innerHTML += `
  Tem item na lista: ${checkItemHasOnlist('mouse')} <br>
  Número aleatório gerado: ${randomNumber()} <br>
  Operador ternário: ${operatorTernary()}
    









`


