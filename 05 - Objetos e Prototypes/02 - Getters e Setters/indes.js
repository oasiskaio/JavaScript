// getter é para obter o valor e setter para settar o valor
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, // pode ou não reconfigurar
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError("Digite um valor number")
            }
            estoquePrivado = valor
        }}
        )}
const p1 = new Produto('camiseta', 20, 3)
p1.estoque = 400
console.log(p1.estoque)



function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor.replace('coisa.', ' ')
        }};
}
const p2 = criaProduto('camiseta');
p2.nome = 'qualquer coisa.';
console.log(p2.nome)