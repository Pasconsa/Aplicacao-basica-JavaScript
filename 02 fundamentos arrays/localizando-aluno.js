//Desafio Procurando na lista
   
    //Metod Includes  = intregra uma alrray e faz uma busca , retorna um booleand(verd , falso)

    //Indexof = traz o numero do indice , no caso Ana é 2

const alunos = ['João', 'Juliana', 'Ana', 'Saulo']

const mediaDosAlunos = [10,7,9,6]


                           //[0]      [1]
let listaDeNotasEAlunos = [alunos, mediaDosAlunos]


const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
    
            return listaDeNotasEAlunos[0] [indice] + ',sua média é ' +
            listaDeNotasEAlunos[1][indice]
    } else {
        return"Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Juliana"))