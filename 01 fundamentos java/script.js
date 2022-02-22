// var = não é recomendada por ser muito solta

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)



// Exercicio com let (permite trocar os valores,porem sempre tem que declarar antes de ser utilizada)

//let forma = 'retângulo'
//let altura = 5;
//let comprimento = 7;
//let area;


//if (forma === 'retângulo') {
    //area = altura * comprimento;
//}   else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area)




// const = fixo o valor declarado fica preso nela e tem que ser declarado antes

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
}   else {
   area = (altura * comprimento) / 2;
}

console.log(area)


