/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*Possiamo immaginare i principali tipi di dati di JavaScript come dei contenitori vuoti che ci servono a salvare dei dati per dopo; sono i booleani (valori che possono essere solamente Veri o Falsi, servono a controllare la verità delle condizioni), le stringhe(sequenze di caratteri che vengono scritte tra le virgolette), i numeri, i null(cassetti appositamente svuotati dagli sviluppatori, per dare valenza nulla) e gli undefined(cassetti vuoti non intenzionalmente).*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*const myName = "Mia";*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log("La somma di " + num1 + " " + "e " + num2 + " " + "è " + sum);*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*let x = 12;*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*const mySurname = Ansaloni
const myName + mySurname = myFullName
console.log(myFullName)*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*let y = 4;
let sub = y - x;
console.log("Il risultato della sottrazione tra " + y + " e " + x + " è uguale a " + sub);*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());*/
