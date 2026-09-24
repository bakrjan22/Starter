function contientElement(tab,e){
    for(let i = 0;i < tab.length;i++){
        if(tab[i] === e){
            return true;
        }
    }
}


console.log(contientElement(["pomme", "banane"], "banane"));
