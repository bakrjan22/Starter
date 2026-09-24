let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];

function binaryresearch(tab,tofind) {
    let from = 0;
    let to = tab.length - 1;
    let mid = parseInt(tab.length / 2);
    for(let i = 0;i < tab.length;i++){
        if (i >= 1){
            mid = parseInt(mid / 2);
        }
        if (tab[mid] == tofind){
            return mid;
        }
        
        if(tofind > tab[mid]){
            from = mid;
            to = tab.length - 1;
        }else{
            from = 0;
            to = mid;
        }
    }
}
console.log(binaryresearch(ids,7));
