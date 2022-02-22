

// Exercícios Criar lista de alunos , médias , criar lista 2 dimensões com estes dados.

const alunos = ['João', 'Juliana', 'Ana', 'Saulo']

const mediaDosAlunos = [10,7,9,6]


                            //0        1
let listaDeNotasEAlunos = [alunos, mediaDosAlunos]


                                    //aluno joão                     //nota 10
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)