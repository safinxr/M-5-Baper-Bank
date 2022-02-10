document.getElementById("button-add").addEventListener('click', function(){
    const input = document.getElementById("input-add");
    const price = document.getElementById("price");
    const pvp =parseFloat(price.innerText);
    const nv = parseFloat(input.value);
    const total =nv +pvp;
    price.innerText = total;
    input.value ="";
    const bal = document.getElementById("bal");
    const bv = parseFloat(bal.innerText);
    const totalbv = bv + total;
    bal.innerText = totalbv;
})

document.getElementById("bget").addEventListener("click", function(){
    const input =document.getElementById("iget");
    const inputValue = parseFloat(input.value);
    const price = document.getElementById("wm");
    const priceValue = parseFloat(price.innerText);
    const total = inputValue + priceValue;
    price.innerText= total;
    input.value ="";
    const bal = document.getElementById("bal");
    const bv = parseFloat(bal.innerText);
    const totalbv = bv - total;
    bal.innerText = totalbv;
    


})