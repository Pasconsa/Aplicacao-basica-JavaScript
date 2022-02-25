
//Desafio Acessar objeto de informação e exibir no console

const cliente = {
    nome:"Saulo",
    idade:36,
    cpf:"12134536543",
    email:"saulo@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

console.log(cliente.cpf.substring(0,3))