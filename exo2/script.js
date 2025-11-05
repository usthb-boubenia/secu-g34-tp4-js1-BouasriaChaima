"use strict";// vu dans le slide 51

//ici on utilise les fonctions , vu dans le slide 45
function f1() {
    //ici on utilise un tableau , vu dans le slide 38 
    // on utilise aussi la portee local , vu on slide 50
    let tableauetudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3'];
    //ici on ytilise la sortie console.log vu dans le slide 33
    console.log(tableauetudiants);
}
function f2() {
    //ici on utilise un objet , vu dans le slide 39
    const etudiant = {
        nom: 'John',
        prenom: 'Doe',
        age: 30,
    };
    //ici on ytilise la sortie console.log vu dans le slide 33
    console.log(etudiant);
}

function f3() {
    // ici on utilise un tableau d'objet(type complexe) , vu dans le slide 40
    const tableaudobjetetudiants = [
        {
            nom: 'nom1',
            prenom: 'prenom1',
            age: 21,

        },
        {
            nom: 'nom2',
            prenom: 'prenom2',
            age: 22,

        },
        {
            nom: 'nom3',
            prenom: 'prenom3',
            age: 23,

        }
    ];
    //ici on utilise les boucle(while), vu dans le slide 44
    let i = 0;
    while (i < tableaudobjetetudiants.length) {
        //ici on ytilise la sortie console.log vu dans le slide 33
        console.log(tableaudobjetetudiants[i].nom + '-' + tableaudobjetetudiants[i].prenom + '-' + tableaudobjetetudiants[i].age);
        // ici on utilise l'incrementation (operation) vu dans le slide 41
        i++;
    }
}