// Variables
var num1, num2, result;

// Sumar
function sumNumber(num1, num2) {
    return num1 + num2;
}

// Restar
function subtractNumber(num1, num2) {
    return num1 - num2;
}

// Multiplicar
var multiplyNumber = function(num1, num2) {
    return num1 * num2;
}

// Dividir
var divideNumber = (num1, num2) => num1 / num2;

// Conseguir los números

var getNumber = () => {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
}

// Operaciones
var resultSum = () => {
    getNumber();
    result = sumNumber(parseInt(num1), parseInt(num2));
    print(); 
}

var resultSubtract = () => {
    getNumber();
    result = subtractNumber(parseInt(num1), parseInt(num2));
    print(); 
}

var resultMultiply = () => {
    getNumber();
    result = multiplyNumber(parseInt(num1), parseInt(num2));
    print(); 
}

var resultDivide = () => {
    getNumber();
    result = divideNumber(parseInt(num1), parseInt(num2));
    print(); 
}

// Eventos
document.getElementById("sum").addEventListener("click", resultSum);
document.getElementById("subtract").addEventListener("click", resultSubtract);
document.getElementById("multiply").addEventListener("click", resultMultiply);
document.getElementById("divide").addEventListener("click", resultDivide);

// Mostrar por pantalla

var print = () => {
    if(num1 && num2) {
        document.getElementById("result").innerHTML = result;
    }
    else {
        document.getElementById("result").innerHTML = "Introduzca valores numéricos en ambos inputs";
    }
}