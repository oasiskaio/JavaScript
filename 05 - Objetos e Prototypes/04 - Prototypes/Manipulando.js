const objA = {
    chaveA: "A"
    // __proto__: Object.prototype
};
const objB = {
    chaveB: "B"
    // __proto__: ObjA
};
const objC = new Object();
objC.chave = 'c';
Object.setPrototypeOf(objB, objA) // escolha o prototype de para usar o
Object.setPrototypeOf(objC, objB) // objc herda os elementos de objB e objA
console.log(objC.chaveA)


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('camisa', 50)
p1.aumento(40)
console.log(p1)

const p2 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(p2, p1)
p2.aumento(30)
console.log(p2)


const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})
p3.aumento(30)
console.log(p3)


