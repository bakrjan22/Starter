let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];

function rechercherEtudiant(id) {
    for(let i = 0;i < students.length;i++){
        if(students[i].id == id){
            console.log("Étudiant trouvé !\n");
            console.log("ID : ",id);
            console.log("Nom : ",students[i].name);
            console.log("Age : ",students[i].age);
            return students[i];
        }
    }
    console.log("Aucun étudiant trouvé avec cet ID.");

}
rechercherEtudiant(3)