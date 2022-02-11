document.getElementById("button-add1").addEventListener('click', function(){
    const input = document.getElementById("input-add1");
    const amount = document.getElementById("amount-innertext");
    const amountValue =parseFloat(amount.innerText);
    const inputValue = parseFloat(input.value);
    const total =inputValue + amountValue;
    amount.innerText = total;
    input.value ="";
    const bal = document.getElementById("total-bal");
    const bv = parseFloat(bal.innerText);
    const totalbv = bv + inputValue;
    bal.innerText = totalbv;
})

document.getElementById("button-get").addEventListener("click", function(){
    const input =document.getElementById("input-get");
    const inputValue = parseFloat(input.value);
    const amount = document.getElementById("get-money");
    const amountValue = parseFloat(amount.innerText);
    const total = inputValue + amountValue;
    amount.innerText= total;
    input.value ="";
    const bal = document.getElementById("total-bal");
    const bv = parseFloat(bal.innerText);
    const totalbv = bv - inputValue;
    bal.innerText = totalbv;    
    


})