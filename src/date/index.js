export default function date() {
  console.log(Date())
  console.log(new Date())
  console.log(new Date(2022, 11, 22)) // ano, mês, dia
  //mês - array de 0 a 11
  //mês - 11 - dezembro
  //mês - 12 - jan de 2023
  //mês - 13 - fev de 2023

  console.log(new Date(2022, 11, 21, 10, 20, 59)) // data e hora
  // Wed Dec 21 2022 10:20:59 GMT-0300 (Horário Padrão de Brasília)

  // traduzindo a data
  const dataTranslate = new Date(2022, 11, 21, 10, 20, 59)
  console.log(dataTranslate.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));
  // saída: 21/12/2022, 10:20:59

  console.log(dataTranslate.toLocaleDateString('pt-BR')); // "21/12/2022"
  console.log(dataTranslate.toLocaleTimeString('pt-BR')); // "10:20:59"

  // formato por extenso - 21 de dezembro de 2022
  const dataFormatada = dataTranslate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo' // garante o fuso horário correto
  });

  console.log(dataFormatada); // 21 de dezembro de 2022
}