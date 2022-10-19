// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

const fiveRndNumbers = arrayRndNum(1, 5);
console.log(fiveRndNumbers);

function arrayRndNum(min, max) {
    let randomNumbers = [];
    while(randomNumbers.length < max ) {
        for (let i = min; i < max; i++) {
           const rndNum = Math.floor(Math.random() * (100 - 1 + 1))+ 1;  
            if(!randomNumbers.includes(rndNum)){
                randomNumbers.push(rndNum);
            }
            i++;
        }   
    }
    
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1))+ min;    
}
console.log(randomNumber())


// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


            // const num = arrayRndNum[i];
            // console.log(randomNumber)