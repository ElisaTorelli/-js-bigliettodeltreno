//  ASK FOR USER INPUT
let userInput = parseInt(prompt("Enter number of km to be covered: "));
let userAge = parseInt(prompt("Enter age of the passenger: "));
let price = userInput * 0.21;

//IF USER INSERTS A VALUE != FROM NUMBER RETURN AN ALERT
if (userInput == (isNaN) || userAge == (isNaN)){
    alert("The inserted value is not valid! Try Again!")
}

//INSERT DIFFERENT CONDITIONS FOR DIFFERENT CASES
price = userAge < 18 ? price * 0.8 : userAge >= 65 ? price * 0.6 : price

//GET RESULT
document.getElementById("main-container").innerHTML = "Your ticket's price is: ";
console.log(Math.ceil(price));