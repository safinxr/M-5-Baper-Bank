function value(inputId){
    const input =document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value ="";
    return inputValue;
}
function totalAmount(amountId, iv){
    const amount = document.getElementById(amountId);
    const amountValue =parseFloat(amount.innerText);
    const total =iv + amountValue;
    amount.innerText = total;
    return total;
}
function totalBal(iv, add){
    const bal = document.getElementById("total-bal");
    const bv = parseFloat(bal.innerText);
    if(add == true){
        const totalbv = bv + iv;
        bal.innerText = totalbv;
    }
    else{
        const totalbv = bv - iv;
        bal.innerText = totalbv;
    }
}
document.getElementById("button-add1").addEventListener('click', function(){
    const inputValue = value("input-add1");
    const total =totalAmount("amount-innertext", inputValue);
    totalBal(inputValue, true);
})
document.getElementById("button-get").addEventListener("click", function(){
    const inputValue = value("input-get");
    const total = totalAmount("get-money", inputValue);
    totalBal(inputValue, false);   
})