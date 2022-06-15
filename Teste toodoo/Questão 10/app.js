let sorveteDeChocolate = ""

function getValue () {
   
    sorveteDeChocolate = document.getElementById ('sabor').value 
    if (sorveteDeChocolate == "Chocolate" || sorveteDeChocolate == "chocolate") {
        alert("Amo sorvete de chocolate")
    }

    else {
        alert("Prefiro outros sabores")
    }
}


