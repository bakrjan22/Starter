function verifierMotDePasse(motDePasse){
    if (motDePasse.includes("@") && motDePasse.length >= 8){
        return true;
    }
    return false;
}
console.log(verifierMotDePasse("code123@"));
