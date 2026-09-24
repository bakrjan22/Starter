function BubbletrouverMax(tab) {
    let L1 = tab.length;
    let k = 0;
    while(k < L1){
        for(let i = 0;i < tab.length;i++){
            if (tab[i] > tab[i+1]){
                let s1 = tab[i];
                let s2 = tab[i+1];
                tab[i] = s2;
                tab[i+1] = s1;
            }
        }
       // console.log("After first sort  " + k + " : " + tab);
        
        k++        
    }
    return tab[0];
}
function swap(tab,i,k){
    let temp = tab[k];
    tab[k] = tab[i];
    tab[i] = temp;

}
function SelectionSort(tab){
    swap(tab,0,tab.length - 1);
}

let tab = [89,60,1,89,2,3,5,2,1,100,120,12,211,322];
//console.log(BubbletrouverMax([89,60,1,89,2,3,5,2,1,100,120,12,211,322]));
const t = {
    l(){
        console.log("lfunc");
        
    },
    k(){
        console.log("k");

    },
    b(){
        console.log("b");

    },
}
for(func in t){
    //console.log(t[func] + " Run : ");
    t[func]()
    
}

