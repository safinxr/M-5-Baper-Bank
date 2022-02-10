document.getElementById("button").addEventListener('click', function(){
    const input1 =document.getElementById("first-input");
    const input2 =document.getElementById("sceond-input");
    if(input1.value == "safin@gmail.com" && input2.value == "love"){
        window.location.href = "banking.html"
    }
    else{
        alert("worng info")
        input1.value ="";
        input2.value ="";
    }
    
})

