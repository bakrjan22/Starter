let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
function sold(acc_instance){
    console.log(acc_instance.balance);
}
function depo(acc_instance,money){
    acc_instance.balance = acc_instance.balance + money; 
}
function retirer(acc_instance,money){
    acc_instance.balance = acc_instance.balance - money; 
}
function check_sold(acc_instance){
    if(acc_instance > 0)
    {
        return true;
    }
    return false;
}
function show_info(acc_instance){
    for(key in acc_instance){
        console.log(key, " : ", acc_instance[i]);
    }
}
show_info(account);