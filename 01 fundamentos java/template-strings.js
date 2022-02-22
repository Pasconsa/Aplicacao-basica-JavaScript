const nome = "Saulo";
const idade = 2022 - 1985;
const cidadeDeNascimento = "Americana";

//const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " anos e nasci na cidade de " + cidadeDeNascimento;




//TEMPLATE STRINGS  (concatenar texto)


//colocar o sinal de grave        simbolo $ e colchetes nas consts
const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)
