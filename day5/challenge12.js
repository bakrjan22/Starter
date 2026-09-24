function eleverAuCarre(nombres) {
    let newT = [];
    nombres.forEach((Num,Index) => {
        newT[Index] = Num * Num;
    });
    return newT;
}
console.log(eleverAuCarre([2, 4, 6]));
