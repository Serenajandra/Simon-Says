// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi:

// => Dichiaro l'array di numeri casuali
const fiveRndNumbers = arrayRndNum(1, 5);

// Inserisco l'array in html
let numbersToRemember = document.getElementById ("numbers");
numbersToRemember.innerHTML = `${fiveRndNumbers}`; 
console.log(fiveRndNumbers);

// Imposto il timeout di 30 secondi
const toDisappear = setTimeout(myTimer, 3000);

// => Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
const askUserNumbers = setTimeout(timeUntilPrompt, 3200)

// => Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let userNumbersString = [];
let userNumbers = [];

userNumbersString.forEach(str => {
  userNumbers.push(Number(str));
});

console.log(userNumbers);


numberChecked(fiveRndNumbers, askUserNumbers)

function numberChecked(fiveRndNumbers, askUserNumbers) {
   let i = fiveRndNumbers.length;
   if (i != askUserNumbers.length) 
   return false;

   while (i--) {
     if (fiveRndNumbers[i] !== askUserNumbers[i]) 
     return false;
   }
   return true;
 };

console.log("Comparing a1 and a2", numberChecked(fiveRndNumbers, askUserNumbers));


// FUNZIONE PER NASCONDERE NUMERI
function myTimer() {
    document.getElementById("numbers").style.visibility = "hidden";
}

// FUNZIONE PER CHIEDERE I NUMERI ALL'UTENTE

function timeUntilPrompt(){
userNumbersString = prompt(`Inserisci i numeri che hai memorizzato`);
console.log(userNumbersString, typeof(userNumbersString));
return userNumbersString
}


// FUNZIONE PER ARRAY DI randomNumbers
function arrayRndNum(min, max) {    
    let randomNumbers = [];
    while(randomNumbers.length < max ) {
        let rndNum = randomNumber(1, 100);
        randomNumbers.push(rndNum);
    }
    return randomNumbers;
}
// console.log(randomNumbers)

// FUNZIONE PER CREARE randomNumber
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1))+ min;    
}


