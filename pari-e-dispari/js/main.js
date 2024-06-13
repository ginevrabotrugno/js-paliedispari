console.log("Pari e Dispari");

// Pari e Dispari
// L’utente sceglie pari o dispari
const userChoice = prompt("scegli 'pari' o 'dispari'");
console.log(userChoice);

// l'utente inserisce un numero da 1 a 5.
const userPlay = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("La tua giocata è: ", userPlay);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const computerPlay = generaNumeroRandom(1,5);
console.log("La giocata del computer è: ", computerPlay);

let esito = giocoPariEDispari(userChoice, userPlay, computerPlay);
console.log(esito);

// funzione gioco pari o dispari
function giocoPariEDispari(choice, play1, play2) {

    // Sommiamo i due numeri 
    let somma = play1 + play2;

    let risutltato = numeroPariODispari(somma);
    
    return choice === risutltato ? "HAI VINTO" : "HAI PERSO";
    

}




