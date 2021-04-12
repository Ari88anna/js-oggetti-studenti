// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {

    'nome': 'Leo',
    'cognome': 'Da Vinci',
    'eta': 50
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {

    thisProperty = studente[key];

    console.log(thisProperty)
}

// Creare un array di oggetti di studenti.
var arrayStudenti = [
    {
        'nome': 'Giulio',
        'cognome': 'Necci',
        'eta': 27
    },
    {
        'nome': 'Caio',
        'cognome': 'Venturi',
        'eta': 24
    },
    {
        'nome': 'Marta',
        'cognome': 'Landi',
        'eta': 22
    },
    {
        'nome': 'Lea',
        'cognome': 'Poli',
        'eta': 24
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i < arrayStudenti.length; i++ ) {

    var thisStudente = (arrayStudenti[i])

    for (var key in thisStudente) {
        console.log(thisStudente.nome, thisStudente.cognome)
    }
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var nomeStudente = prompt('dimmi il tuo nome');
var cognomeStudente = prompt('dimmi il tuo cognome');
var etaStudente = parseInt(prompt('Quanti anni hai'));

var nuovoStudente = {    
    'nome': nomeStudente,
    'cognome': cognomeStudente,
    'eta': etaStudente
}

arrayStudenti.push(nuovoStudente);

console.log(arrayStudenti);