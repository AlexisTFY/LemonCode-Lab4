// Variables
var result;

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

var getNumber = (id) => num1 = document.getElementById(id).value;

// Operaciones
var resultSum = () => {
    var num1 = getNumber('num1');
    var num2 = getNumber('num2');
    result = sumNumber(parseInt(num1), parseInt(num2));
    print(); 
}

var resultSubtract = () => {
    var num1 = getNumber('num1');
    var num2 = getNumber('num2');
    result = subtractNumber(parseInt(num1), parseInt(num2));
    print(); 
}

var resultMultiply = () => {
    var num1 = getNumber('num1');
    var num2 = getNumber('num2');
    result = multiplyNumber(parseInt(num1), parseInt(num2));
    print(); 
}

var resultDivide = () => {
    var num1 = getNumber('num1');
    var num2 = getNumber('num2');
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