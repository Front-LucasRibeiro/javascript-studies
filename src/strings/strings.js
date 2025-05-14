export default function formattedName() {
  let name = 'Lucas Lima Ribeiro Maranho'

  let fullNameFormatted = name.split(" ")
  let myName = fullNameFormatted[0]
  let myLastName = fullNameFormatted.slice(1).join(" ") // Pega do índice 1 até o fim

  console.log(myName) // Lucas
  console.log(myLastName) // Lima Ribeiro Maranho


  let input = document.createElement('input')
  input.value = myName

  let inputLastName = document.createElement('input')
  inputLastName.value = myLastName

  let br = document.createElement('br')

  let html = document.querySelector("#app")
  html.appendChild(br)
  html.appendChild(input)
  html.appendChild(inputLastName)

  document.addEventListener("DOMContentLoaded", () => {
    formattedName();
  })

  return `${myName} ${myLastName}`
}

