
//Ex1
let estiljs = () => {
    $("text").style.color = "red"
}

//Ex2
let prenValorForm = () => {
    event.preventDefault()
    let form = $("formulari1")
    console.log(form["nom"].value,form["cognom"].value)
}

//Ex3
let changePBackground = () =>{
   let oPs = document.querySelectorAll("p")
   oPs.forEach(item => {
       item.style.background = "green"
   })
}

//Ex4
let obtenirAtributs = () =>{
    let attributs = $("itb").attributes
    console.log(attributs)
}

//Ex5
let insertarFilaInici = () =>{
    let firstRow = $("Taula").getElementsByTagName("tr")[0]
    let newRow = document.createElement("tr")
    for(let i = 0; i < 2; i++){
        let td = document.createElement("td")
        newRow.append(td)
    }
    firstRow.before(newRow)
}
let insertarFilaFinal = () =>{
    let rows = $("Taula").getElementsByTagName("tr")
    let lastRow = rows[rows.length-1]
    let newRow = document.createElement("tr")
    for(let i = 0; i < 2; i++){
        let td = document.createElement("td")
        newRow.append(td)
    }
    lastRow.after(newRow)
}

//Ex6
let insertValue = () =>{
    let fila = $("fila").value-1
    let cela = $("cela").value-1
    let valors = $("valor").value
    let updateCela = $("Taula").getElementsByTagName("tr")[fila].getElementsByTagName("td")[cela]
    if(updateCela != null){
        updateCela.innerHTML = valors
        fila.value = ""
        cela.value = ""
        valors.value = ""
    }else{
        alert("Cel·a no existeix")
    }
}

//Ex7
let generateTable = () =>{
    let files = prompt("Quantes files vols?")
    let celes = prompt("Quantes cel·les vols?")
    let table = $("Taula")
    for(let i = 0; i < files; i++){
         let newRow = document.createElement("tr")
        for(let j = 0; j < celes; j++){
             let td = document.createElement("td")
             td.innerHTML = "Prueba"
            newRow.append(td)
        }
        table.append(newRow)
    }    
}

//Ex8
let deleteOption = () =>{
    $("dropDownList").value = null
}

//Ex9
let alertOption = () =>{
    alert($("dropDownList").value)
}

//Ex10
let calcularVolumenCilindro = () =>{
    let radio = $("radio").value
    let altura = $("altura").value
    let result = $("result")
    let volumen = Math.PI * altura * Math.pow(radio,2)
    console.log(altura)
    result.innerText = Math.round(volumen*100)/100
}

//Ex11
let resaltar = () =>{
    let wordsToChange = document.querySelectorAll("strong")
    wordsToChange.forEach(item =>{
        item.style.fontSize = "1.4em"
        item.style.color = "red"
    })
}

let tornaNormal = () =>{
    let wordsToChange = document.querySelectorAll("strong")
    wordsToChange.forEach(item =>{
        item.style.fontSize = "initial"
        item.style.color = "black"
    })
}

//Get Element by ID
let $ = ( id ) => { return document.getElementById( id ); };