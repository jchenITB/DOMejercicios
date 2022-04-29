let estiljs = () => {
    document.getElementById("text").style.color = "red"
}

let prenValorForm = () => {
    event.preventDefault()
    let form = document.getElementById("formulari1")
    console.log(form["nom"].value,form["cognom"].value)
}

let ex3 = () =>{
   let oPs = document.querySelectorAll("p")
   oPs.forEach(item => {
       item.style.background = "green"
   })
}

let obtenirAtributs = () =>{
    let attributs = document.getElementById("itb").attributes
    console.log(attributs)
}
