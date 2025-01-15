// O while é ideal quando você não sabe de antemão quantas iterações serão necessárias para atingir uma condição de parada
export default function whileFile(){
  let number = 9

  while(number < 10 && number >= 2){
    console.log(number)
    number--
  }

  return ''
}


// Quando você precisa verificar continuamente o estado de algo até que uma determinada condição seja satisfeita
let connected = true;
while (connected) {
    // Simula a verificação de conexão
    // connected = checkConnection();
    console.log("Ainda conectado...");
}
console.log("Conexão perdida!");


// Quando você deseja garantir que o bloco seja executado ao menos uma vez antes de verificar a condição:
let count = 0;
do {
    console.log("Executado ao menos uma vez! Contagem:", count);
    count++;
} while (count < 3);
