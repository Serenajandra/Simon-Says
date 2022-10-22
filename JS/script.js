// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi:

// => Dichiaro l'array di numeri casuali
const fiveRndNumbers = arrayRndNum(1, 5);

// Inserisco l'array in html

// let numbersToRemember = document.getElementById ("numbers");
// numbersToRemember.innerHTML = `${fiveRndNumbers}`; 

// Altro modo:
document.getElementById ("numbers").innerHTML = fiveRndNumbers;
console.log(fiveRndNumbers);

// Imposto il timeout di 30 secondi
const toDisappear = setTimeout(myTimer, 3000);
// => Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Chiamo la funzione che:
//  -domanda e inserisce in unn array i numeri dell'utente;
// -confronta i due array e verifica se sono uguali
const askUserNumbers = setTimeout(timeUntilPrompt, 3200)
// => Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONE PER NASCONDERE NUMERI
function myTimer() {
    document.getElementById("numbers").style.visibility = "hidden";
}

// FUNZIONE PER CHIEDERE I NUMERI ALL'UTENTE e confrontarli

function timeUntilPrompt(userNum){
  let userNumbers = [];
  userNum = parseInt(prompt(`Inserisci numero memorizzato`));
  userNumbers.push(userNum)
  userNum = parseInt(prompt(`Inserisci numero memorizzato`));
  userNumbers.push(userNum)
  userNum = parseInt(prompt(`Inserisci numero memorizzato`));
  userNumbers.push(userNum)
  userNum = parseInt(prompt(`Inserisci numero memorizzato`));
  userNumbers.push(userNum)
  userNum = parseInt(prompt(`Inserisci numero memorizzato`));
  userNumbers.push(userNum);
  
  // FUNZIONE che confronta i due array di numeri
 
  const userResult = numberChecked(fiveRndNumbers, userNumbers)
  
  document.getElementById("result").innerHTML = `Hai indovinato ${parseInt(userResult.length)} numeri. Rispettivamente: ${userResult}`;
}



function numberChecked(fiveRndNumbers, userNumbers) {
  const result = []
  for(let i = 0; i<fiveRndNumbers.length; i++){
    thisNumber = userNumbers[i];
    if (fiveRndNumbers.includes(thisNumber)) {
      result.push(thisNumber);      
    }
  }
  console.log(result.length, result)
  return result;
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

// FUNZIONE PER CREARE randomNumber
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1))+ min;    
};