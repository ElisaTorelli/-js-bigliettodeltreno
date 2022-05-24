// Il prezzo del biglietto ha un costo di 0.21€ per km da percorrere.
// Se il passeggerò è minorenne, il prezzo del biglietto sarà scontato del 20%.
// Se l'età del passeggerò è un valore maggiore o uguale di 65, il prezzo del biglietto sarà scontato del 40%.
// Se il valore inserito nel prompt non è un valore numerico, dovrà essere restituito a video 
//il seguente messaggio: "il valore inserito non è un numero. Riprova"



//  ASK FOR USER INPUT
let userInput = parseInt(prompt("Enter number of km to be covered: "));
let userAge = parseInt(prompt("Enter age of the passenger: "));
let price = userInput * 0.21;


if (userInput == (isNaN) || userAge == (isNaN)){
    alert("The inserted value is not valid! Try Again!")
}

price = userAge < 18 ? price * 0.8 : userAge >= 65 ? price * 0.6 : price

document.getElementById("main-container").innerHTML = "Your ticket's price is: ${Math.ceil(price)}";
