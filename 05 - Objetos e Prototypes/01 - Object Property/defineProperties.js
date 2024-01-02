// defineproperty
// defineProperties
// um é para varias chaves e o outro é uma só
function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque,   // valor
        writable: false,  //valor n pode ser alterado
        configurable: true // pode ou não reconfigurar
    })
    Object.defineProperties(this,{
       nome: {
        enumerable: true, //mostra a chave
        value: nome,   // valor
        writable: false,  //valor n pode ser alterado
        configurable: true // pode ou não reconfigurar
       },
       preco: {
        enumerable: true, //mostra a chave
        value: preco,   // valor
        writable: false,  //valor n pode ser alterado
        configurable: true // pode ou não reconfigurar
       },
    })
}
const p1 = new Produto('camiseta', 20, 3)
console.log(p1)
console.log(Object.keys(p1))
console.log(Object.getOwnPropertyDescriptor(p1, 'nome'))