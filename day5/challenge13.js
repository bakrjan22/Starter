function trouverPremierMajeur(utilisateurs) {
    for(let i = 0;i < utilisateurs.length;i++){
        let user = utilisateurs[i];
        for(key in user){
            if (user.age >= 18){
                return user;
            }
        }
    }
    
}
console.log(trouverPremierMajeur([{nom: "Lina", age: 20}, {nom: "Amine", age: 20}]));
