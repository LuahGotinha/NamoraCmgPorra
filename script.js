function sim(){
    alert("Agora você vai ser a pessoa mais feliz do mundo");
}

function desvia(t){
    var btn = t;
    console.log(btn);
    console.log("opa, desviei...");
    btn.style.position = "absolute";
    btn.style.bottom = randomNumber(10, 50);
    btn.style.left = randomNumber(10, 50); 
}

function randomNumber(min, max) {
    return (Math.random() * (max - min) + min) + "%"
}