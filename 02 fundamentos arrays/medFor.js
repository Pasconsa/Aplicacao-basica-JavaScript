//Calcular média entre as seguintes nota usando for

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0
            // condição de parada     //4                     
for(let i = 0; i < notas.length; i++){somaDasNotas += notas [i];
}

let media = somaDasNotas/notas.length

console.log(media)