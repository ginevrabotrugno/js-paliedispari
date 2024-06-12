// funzione che opera una somma tra due numeri
function sommaNumeri(num1, num2) {

    const risultato = num1 + num2;

    return risultato;
}

// funzione che genera un numero random in a range
function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}


// funzione che stabilisce se un numero è pari o dispari
function numeroPariODispari(numero) {

    return numero % 2 === 0 ? "pari" : "dispari";

}



//funzione che stabilisce se una parola è palindroma
function palindrome(word) {
    
    const letters = word.split("");
    const result = letters.join("");
    
    
    const lettersReverse = letters.reverse();
    let resultReverse = lettersReverse.join("");
  
    
    
    return result === resultReverse ? "E' PALINDROMA!!" : "NON E' PALINDROMA!!";
}



// funzione gioco pari o dispari
function pariEDispari(choice, play1, play2) {

    // Sommiamo i due numeri 
    let somma = play1 + play2;

    let risutltato = numeroPariODispari(somma);

    // Dichiariamo chi ha vinto.
    if (choice === "pari" && risutltato === "pari") {
        console.log("HAI VINTO");

    } else {
        
        console.log("HAI PERSO");
    }
    
}
