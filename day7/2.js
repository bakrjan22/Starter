function triebull(tab){
    for(let i = 0;i< tab.length;i++){
        for(let k = 0;k < tab.length;k++){
            if(tab[k] < tab[k+1]){
                let t1 = tab[k]
                let t2 = tab[k+1]
                tab[k] = t2;
                tab[k+1] = t1;
            }
        }
    }
}
let notes = [12, 5, 19, 3, 27, 8, 14];
triebull(notes);
console.log(notes);
