// Variáveis(var, let, const)

// var - equivalente a uma variavel global, mesmo colocando dentro de escopos locais
// ainda é possivel alterar valor e acessar valores de var declarados dentro do escopo local no escopo global

export default function typeVar() {
  var x = 10;
  console.log("x", x);

  {
    console.log("x", x);
    x = 20;
    var y = 30;
  }

  console.log("x", x);
  console.log("y", y);
}

export function typeLet() {
  let x = 10;
  console.log("x", x);

  {
    console.log("x", x);
    x = 20;
    let y = 30;
  }

  console.log("x", x);
  // console.log("y", y); com let - variavel y não é acessivel fora do escopo em que foi criada
}

// const - somente leitura não é possível alterar
export function typeConst() {
  const x = 10;
  console.log("x", x);

  {
    console.log("x", x);
    // x = 20; - Cannot assign to 'x' because it is a constant.ts(2588)
    const y = 30;
  }

  console.log("x", x);
  // console.log("y", y); com const - variavel y não é acessivel fora do escopo em que foi criada
}