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

pariEDispari(userChoice, userPlay, computerPlay);





