//Consultar um objeto por lista de chaves , geradas no sistema e printar na tela

const cliente = {
    nome:"Saulo",
    idade:36,
    cpf:"12134536543",
    email:"saulo@email.com"
}

const chaves = ["nome","idade","cpf","email"]

//console.log (cliente[chaves[0]])


  //for.each precisa de uma função callback para funcionar

      chaves.forEach(info=>console.log(cliente[info]))