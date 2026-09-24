function linearfind(tab,f){
    for (let i = 0; i < tab.length; i++) {
        if(tab[i] == f){
            return true;
        }
    }
    return false;
}