function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia){ // Metodo de Produto
    this.preco += quantia};
Produto.prototype.desconto= function(quantia){ // Metodo de Produto
    this.preco -= quantia};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor};
Camiseta.prototype = Object.create(Produto.prototype); // Cria um objeto vazia para usar o prototype de produto, o que alterar em produto n muda em camiseta
Camiseta.prototype.constructor = Camiseta; // tem que ser feito para apontar ao construtor real que criou camiseta
Camiseta.prototype.aumento = function(percentual){    // Metodo inicial de Produto que foi alterado e pertence a camiseta
    this.preco = this.preco + (this.preco * (percentual / 100))
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') {
                throw new TypeError("Digite um valor number")
              };
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('original', 1.50);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('caneca', 5, 'vidro', 20);

caneca.estoque = 5; // aqui to usando setter
console.log(caneca.estoque) // aqui to usando getter
console.log(produto)
console.log(camiseta)
console.log(caneca)
