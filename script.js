function IMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function CalculoDeIMC() {
    // Obter os valores de peso e altura dos campos de entrada
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = ("Por favor, insira valores válidos para peso e altura.");
        return;
    }else{
        var imc = IMC(peso, altura);
        console.log(imc);
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);

    }
}