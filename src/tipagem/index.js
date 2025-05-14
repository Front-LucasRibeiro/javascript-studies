// O JavaScript é uma linguagem fracamente tipada, isso significa que "ele" tentará converter em tempo de execução os dados baseado no valor.

/* 
  O JavaScript é uma linguagem fracamente tipada, isso significa que "ele" tentará converter em tempo de execução o dados baseado no valor.
  Isso é um ponto de atenção importante dentro do JS, já que a depender do valor da variável o seu programa pode "dar bugs" em função de tipos inesperados. 
  E para isso utilizaremos artifícios como o comparador idêntico.
*/

export default function Tipagem() {
  let name = "Lucas";
  let idade = "30";
  let idadeNumero = 30;

  // Comparação fraca (==) — o JavaScript converte os tipos automaticamente
  if (idade == idadeNumero) {
    console.log("Idades são iguais com ==");
  } else {
    console.log("Idades são diferentes com ==");
  }

  // Comparação estrita (===) — sem conversão implícita (compara tanto o tipo e o valor da variavel)
  if (idade === idadeNumero) {
    console.log("Idades são iguais com ===");
  } else {
    console.log("Idades são diferentes com ===");
  }

  // Conversão explícita da string para número
  if (Number(idade) === idadeNumero) {
    console.log("Após conversão, idades são iguais com ===");
  }

  // Comparação de string com boolean
  const ativo = "true"; // string
  const isAtivo = true; // boolean

  if (ativo == isAtivo) {
    console.log("Comparação entre string e boolean com == passou!");
  } else {
    console.log("Comparação entre string e boolean com == falhou!");
  }

  // Forma segura: conversão explícita
  if (ativo === String(isAtivo)) {
    console.log("Comparação segura entre string e boolean.");
  }

  // Casos perigosos de coerção de tipo
  console.log("0 == false:", 0 == false);       // true
  console.log("'' == false:", '' == false);     // true
  console.log("null == undefined:", null == undefined); // true
  console.log("[] == false:", [] == false);     // true
  console.log("[] == 0:", [] == 0);             // true


  console.log("[1] == 1:", [1] == 1);           // true
  /* Entendendo a comparação feita pelo js:
    [1] é um array, e arrays são objetos. Quando comparado com um number, ele precisa ser convertido para primitivo.

    O JavaScript chama o método interno toPrimitive, que no caso de arrays chama primeiro valueOf() e depois toString() se necessário.

    valueOf() em arrays retorna o próprio array, então não resolve.

    Então o JavaScript chama [1].toString(), que retorna a string "1".

    Agora temos: "1" == 1

    O JavaScript converte "1" (string) em 1 (número) para fazer a comparação.

    1 == 1 → ✅ true
  */



  // Comparações seguras usando ===
  console.log("0 === false:", 0 === false);     // false
  console.log("'' === false:", '' === false);   // false
  console.log("null === undefined:", null === undefined); // false
}


/* 
  Por que o == é tão permissivo?
  O == (comparação fraca) foi projetado com conveniência em mente:

  Os desenvolvedores eram iniciantes em sua maioria.

  A web precisava rodar scripts simples e tolerantes a erro.

  Era comum que valores viessem como strings do HTML, mas o dev quisesse comparar com números ou booleans.

  Então o JS pensava:

  "Se parece com um número, vamos tentar tratar como número!"
*/