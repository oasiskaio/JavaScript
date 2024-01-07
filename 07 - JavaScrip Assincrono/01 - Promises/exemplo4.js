let promise = Promise.resolve(3)
let promise2 = Promise.resolve(4)
let promise3 = Promise.resolve(4)

// sera usado o resultado da promice que terminar primeiro, o resto n será usado
//exemplo, consulta de endereço em 3 bancos de dados
Promices.race([promise, promise2, promise3])
   .then(function (values){

   })

// esse metodo espera que todas as promices retornem um resultado para depois
// fazer o .then em manipular os resultados
// exemplo disputa de frete entre 3 empresas e no final calcular o melhor frete
// para o usuario
Promices.all([promise, promise2, promise3])
   .then(function (values){

   })