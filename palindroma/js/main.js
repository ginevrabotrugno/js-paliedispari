console.log("palindroma");

// Chiedere all’utente di inserire una parola(prompt)
// const userInput = prompt("Inserisci una parola");

const userInput = "ANNA"; 

// scomporre la parola in un array composto dalle sue lettere
const letters = userInput.split("");
console.log(letters);

let result = letters.join("");
console.log(result);

const lettersReverse = letters.reverse();
console.log(lettersReverse);

let resultReverse = letters.join("");
console.log(resultReverse);


if (result === resultReverse) {
    console.log("PALINDROMA!");

}   else {
    console.log("NO!");

}











// controllare che siano uguali fra loro

// Creare una funzione per capire se la parola inserita è palindroma


    
