export default function strings() {
  let name = 'Lucas Lima Ribeiro Maranho'

  let fullNameFormatted = name.split(" ")
  let myName = fullNameFormatted[0]
  let myLastName = fullNameFormatted.slice(1).join(" ") // Pega do índice 1 até o fim

  console.log(myName) // Lucas
  console.log(myLastName) // Lima Ribeiro Maranho
}