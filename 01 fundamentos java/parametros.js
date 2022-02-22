// Paramentros de função
    //Objetivo função funcionar conjunto de numeros

    function soma(numero1, numero2)  {
        return numero1 + numero2;
    }

    console.log (soma(2, 2))
    console.log (soma(245, 20))
    console.log (soma(-500,60))

    
    
    //ordem de parametros

    function soma(numero1, numero2) {
        return numero1 + numero2;
    }

    function multiplica(numero1, numero2){
        return numero1 * numero2;
    }

    console.log (multiplica(soma(4, 5), soma(3, 3)))