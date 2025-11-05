"use strict";// vu dans le slide 51
// ici on utilise un tableau d'objet(type complexe) , vu dans le slide 40
const students = [
    {
        id: 1000,
        nom: "JOHN",
        prenom: "DOE",
        note1: 14,
        note2: 5
    },
    {
        id: 2000,
        nom: "BOB",
        prenom: "CARLTON",
        note1: 7,
        note2: 1
    },
    {
        id: 3000,
        nom: "RAYANE",
        prenom: "SMITH",
        note1: 13,
        note2: 3
    }
];
//ici on utilise la fonctions flechee, vu dans le slide 46
const B = (note1, note2) => {
    //on utilise les operateurs, vu dans le slide 41
    let moyenne;
    moyenne = (note1 + note2) / 2 + 5
    // ici on utilise la condition, vu dans le slide 42
    if (moyenne >= 10) {// et on utilise les operateurs, vu dans le slide 41
        return true;
    } else {
        return false;
    }
};
//ici on utilise les fonctions , vu dans le slide 45
function A() {
    let i = 0;//porte de la variable , vu dans le slide 51
    //ici on utilise la boucle while, vu dans le slide 44
    while (i < students.length) {
        //porte de les variables , vu dans le slide 51
        const estAdmis = B(students[i].note1, students[i].note2);
        let statut;
        // les conditions , vu dans le slide 42
        if (estAdmis) {
            statut = "ADMIS";
        } else {
            statut = "AJOURNE";
        }
        //ici on ytilise la sortie console.log vu dans le slide 33
        console.log(students[i].id + ':' + statut);
        // ici on utilise l'incrementation (operation) vu dans le slide 41
        i++;
    }
};
