function IMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function CalculoDeIMC() {
    // Obter os valores de peso e altura dos campos de entrada
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(peso) || isNaN(altura) || imc <= 0 || altura > 2.50) {
        document.getElementById("resumoIMC").innerHTML = ("Por favor, insira valores válidos para peso e altura.");
        return;
    }else{
        var imc = IMC(peso, altura);
        console.log(imc);
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);

    }

    if (imc > 35) {
        document.getElementById("resumoIMC").innerHTML = "Obesidade Extrema";
    } else if(imc > 35){
        document.getElementById("resumoIMC").innerHTML = "Obesidade";
    } else if(imc > 25){
        document.getElementById("resumoIMC").innerHTML = "exceso de peso";
    } else if(imc > 18.5){
        document.getElementById("resumoIMC").innerHTML = "peso normal";
    } else {
        document.getElementById("resumoIMC").innerHTML = "Baixo peso";
    } 
} 
