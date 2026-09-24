function saluerClient(nom,titre = "Client"){
    if (titre == "Client"){
        return "Bonjour " + titre + " " + nom;
    }
    return "Bonjour " + titre + " " + nom;

}
console.log(saluerClient("Dupont","Chef"));
