function ajouterALaFin(tab,x){
    tab[tab.length] = x;
    return tab;
}
function fusionnerTableaux(tab1,tab2){
    let tab3 = [];
    let tab1_epc_s = 0;
    let tab2_epc_s = 0;
    for(let i = 0; i < (tab1.length + tab2.length);i++){
        if (tab1_epc_s != tab1.length){
            ajouterALaFin(tab3,tab1[i]);
            tab1_epc_s++;
        }else{
            ajouterALaFin(tab3,tab2[tab2_epc_s]);
            tab2_epc_s++;
            if(tab2_epc_s == tab2.length){
                break
            }
        }
    }
    return tab3;
}

console.log(fusionnerTableaux([1, 2], [3, 4, 9]));
