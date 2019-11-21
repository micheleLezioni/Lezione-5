//RECAP ARRAY
//Metodi high order per gli array
//Map, filter, find, findIndex, reduce

//Map
//Cosa fa? => Trasforma gli elementi dell'array restituendo un array di elementi modificati
//Sintassi
//come parametro prende una callback
//l'unico parametro "obbligatorio" è il primo che rappresenta SEMPRE l'elemento corrente
//Parliamo di elemento corrente perché map (come tutti gli altri metodi) esegue la funzione di callback su tutti gli elementi dell'array
/* 
var myArray = [1,2,3,4]

const myFunction = (current) => current + 2  // perché l'arrow function ha un return implicito
function myFunction (current)=> {
  return current+2
}

myArray.map(myFunction)

let arrayTrasformato = myArray.map( (current) => current + 2 ))

//abbiamo utilizzato map come se fosse un filter
let arrayTrasformato = myArray.map( (current) => {
  if(current>2){
  return current
} )
})


//Filter
//Come map RITORNA un array ( se la funzione ritorna FALSE per ogni elemento filter ritorna un array vuoto [] )
//Argomento necessario è il primo che rappresenta l'elemento corrente
//Cosa fa? => Filtra gli elementi basandosi su una condizione => se la funzione di callback ritorna TRUE filter prende l'elemento corrente e lo
//inserisce dentro un array

const elementiMaggioriDiDue = (current)=> current > 2  // ritorna currnet > 2 => RITORNA TRUE OR FALSE

let arrayFiltrato = myArray.filter(elementiMaggioriDiDue)


//Find
//molto simile al filter
//A differenza del filter non ritorna un array ma ESTRAE il primo l'elemento che verifica la condizione
//Una volta che ha trovato l'elemento stoppa l'esecuzione
// ma se non trova niente ritorna undefined

const qualcosaDaTrovare = myArray.find((current)=> current == 2)

//FindIndex
//molto simile a find
//A differenza di find non ESTRAE l'elemento ma la sua posizione
var index = myArray.findIndex((current)=>current == 2)


//Reduce
//Cosa fa? Riduce(ritorna) l'array ad un singolo elemento
//Argomenti della funzione fondamentali sono 2 => 
// 1) rappresenta l'elemento che alla fine di reduce verrà ritornato ma anche "l'accumulatore" 
//2) rappresenta l'elemento corrente
//QUELLO CHE LA FUNZIONE RITORNA VIENE SALVATO NELL'ACCUMULATORE (prev)
var myArray = [1,2,3,4,5] => 

1) elemento 1
prev = 1
current = 1
la funzione ritorna current che va a finire in prev
2) elemento 2
prev = 1
current = 2
la funzione ritorna current che va a finire in prev
2) elemento 3
prev = 2
current = 3
la funzione ritorna current che va a finire in prev
...
alla fine ritorna 5


const funzioneReduce = (prev,current) => {
  return current
}

var elemento = myArray.reduce(funzioneReduce)

//somma di elementi nell'array
[1,2,3,4] 
const funzioneReduce = ((prev,current) => {
  return current + prev
},0)

var elemento = myArray.reduce(funzioneReduce)

1) elemento 1
prev = 0
current = 1
la funzione ritorna current + prev = 1 che va a finire in prev
2) elemento 2
prev = 1
current = 2
la funzione ritorna current + prev = 3 che va a finire in prev
4) elemento 3
prev = 3
current = 3
la funzione ritorna current + prev = 6 che va a finire in prev
4) elemento 4
prev = 6
current = 4
la funzione ritorna current + prev = 10 che va a finire in prev
alla fine reduce ritorna 10


//voglio trovare il max
[1,7,3,4,10] 
const funzioneReduce = (prev,current) => {
  current > prev ? current : prev
}

var elemento = myArray.reduce(funzioneReduce)
1) elemento 1
prev = 1
current = 1
la funzione ritorna  current > prev ? current : prev => 1 che va a finire in prev
2) elemento 7
prev = 1
current = 7
la funzione ritorna  current > prev ? current : prev => 7 che va a finire in prev
3) elemento 3
prev = 7
current = 3
la funzione ritorna  current > prev ? current : prev => 7 che va a finire in prev
4) elemento 4
prev = 7
current = 4
la funzione ritorna  current > prev ? current : prev => 7 che va a finire in prev
4) elemento 10
prev = 7
current = 10
la funzione ritorna  current > prev ? current : prev => 10 che va a finire in prev
prev alla fine vale 10 che è il max

*/

//ESERCIZIO DIFFICILE
//Preso l'array menu
//Scrivi una funzione che ritorni un array di oggetti composto da commenti con voti superiori al 3 nella forma

/* 

[{
  author: ..
  comment:...
  rating
},
{
  author: ..
  comment:...
  rating
}]

*/
var menuCibi = [
  {
    id: 0,
    name: "Carbonara",
    image: "assets/images/carbonara.jpg",
    category: "mains",
    label: "Fat",
    price: "7.99",
    description:
      "Pasta with Guanciale (a kind of bacon), Pecorino (sheep cheese), Pepper, Salt and Eggs.",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "Wow! One of the best pasta I ever had!",
        author: "Tobia De Angelis",
        date: "2020-10-16T17:57:28.556094Z"
      },
      {
        id: 1,
        rating: 3,
        comment: "Awesome!",
        author: "Diego Banovaz",
        date: "2020-10-16T17:57:28.556094Z"
      },
      {
        id: 2,
        rating: 4,
        comment: "Awesome!",
        author: "Diego Banovaz",
        date: "2020-10-16T17:57:28.556094Z"
      }
    ]
  },
  {
    id: 1,
    name: "Amatriciana",
    image: "assets/images/amatriciana.jpg",
    category: "mains",
    label: "Spicy",
    price: "6.99",
    description:
      "Pasta with Guanciale (a kind of bacon), Pecorino (sheep cheese), Pepper, Salt and tomato sauce.",
    comments: [
      {
        id: 0,
        rating: 4,
        comment: "Great Pasta... but the original recipe is not spicy!",
        author: "Tobia De Angelis",
        date: "2020-10-16T17:57:28.556094Z"
      }
    ]
  },
  {
    id: 2,
    name: "Cacio & Pepe",
    image: "assets/images/cacioepepe.jpg",
    category: "mains",
    label: "Cheesy",
    price: "7.99",
    description:
      "Pasta with Pecorino (sheep cheese), Pepper, Salt and Parmigiano Reggiano.",
    comments: [
      {
        id: 0,
        rating: 5,
        comment: "Fat is good!",
        author: "Tobia De Angelis",
        date: "2020-10-16T17:57:28.556094Z"
      },
      {
        id: 1,
        rating: 5,
        comment: "Creamy and somehow salty! Love it!",
        author: "Diego Banovaz",
        date: "2020-10-16T17:57:28.556094Z"
      }
    ]
  },
  {
    id: 3,
    name: "Gricia",
    image: "assets/images/gricia.jpg",
    category: "mains",
    label: "Fat+",
    price: "8.99",
    description:
      "Pasta with Guanciale (a kind of bacon), Pecorino (sheep cheese), Pepper, Salt. Somehow a Carbonara w/o Eggs.",
    comments: [
      {
        id: 0,
        rating: 1,
        comment: "Please call a medic, I'm having an heart attack!",
        author: "Tobia De Angelis",
        date: "2020-10-16T17:57:28.556094Z"
      },
      {
        id: 1,
        rating: 2,
        comment: "Please kill me! Grease, grease everywhere!!",
        author: "Diego Banovaz",
        date: "2020-10-16T17:57:28.556094Z"
      },
      {
        id: 2,
        rating: 5,
        comment: "More! I Need More!",
        author: "Stefano Casasola",
        date: "2020-10-16T17:57:28.556094Z"
      }
    ]
  },
  {
    id: 4,
    name: "Scogliera",
    category: "seafood",
    label: "Summer",
    price: "7.99",
    description: "Pasta with fresh seafood of every kind",
    comments: []
  }
];

const funzioneEsercizio = (menu = menuCibi) => {
  var arrayDiElementi = [];
  var arrayDiCommenti = menu.map(current => {
    var filteredByRating = current.comments
      .filter(commentsElement => {
        return commentsElement.rating > 3;
      })
      .map(currentElement =>
        arrayDiElementi.push(
          Object.assign(
            {},
            {
              author: currentElement.author,
              comment: currentElement.comment,
              rating: currentElement.rating
            }
          )
        )
      );
  });
  arrayDiCommenti.map(current =>
    current.forEach(el => arrayDiElementi.push(el))
  );
  return arrayDiElementi;
};

var arrayDiCommenti = funzioneEsercizio();
console.log(arrayDiCommenti);
//EXTRA media dei voti nell'array finale (usa reduce)
