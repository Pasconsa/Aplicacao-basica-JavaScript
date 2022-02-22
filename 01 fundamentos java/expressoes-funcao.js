//Expressão de função  

    //não tem um nome da função criar uma variavél nocaso const e atrribuiu a váriavel

//const soma = function(num1, num2) {return num1 + num2}
//console.log(soma(1,1))


// Diferença principal entre Expressão e Declaração de função. HOISTING
// funçoes e var são "listadas" no topo

//quando é uma função direta é possivel fazer o comando log de execussão acima do arquivo.
console.log(apresentar())

function apresentar() {
    return "olá"
}

// como a  função não é direta não é possivel

console.log(soma(1, 1))
const soma = function(num1, num2) {
    return num1 + num2
}
