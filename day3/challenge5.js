function additionnerTout(...args){
    let c = 0;
    
    args.forEach(num => {
        c = c + num;
    });
    
    return c;
}
console.log(additionnerTout(9, 20, 30, 40));
