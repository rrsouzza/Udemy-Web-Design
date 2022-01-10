function calcularMedia(){
    var total = 0;
    var qtd = arguments.length;     //Podemos recuperar a quantidade de parâmetros foram passados sem necessariamente tendo os definido para a função. Dessa forma, a função pode ser usada para calcular a média entre uma quantidade infinita de valores.
    var x = 0;
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++;
    }
    return (total / qtd).toFixed(2);    //Irá arredondar e retornar a média com 2 casas decimais.
}

function sortear(n){
    var _n = n || 1;    //Caso não seja passado nenhum parâmetro, o número considerado será 1. Por isso, o retorno sempre será 0, pois o número sorteado será entre 0 e 0.9999 e, ao ser arredondado para baixo, resultará em 0.
    var nSorteado = Math.random();  //Sorteia um número.
    nSorteado = nSorteado * _n;     //Multiplica o número sorteado pelo parâmetro passado, assim sempre teremos um número sorteado entre 0 e o limite definido.
    nSorteado = Math.floor(nSorteado);  //Arredonda o número para baixo.
    return nSorteado;   //Retorna o número.
}