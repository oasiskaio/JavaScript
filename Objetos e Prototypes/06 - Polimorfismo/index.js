// Superclass 
function Conta(agencia, conta, saldo){
   this.agencia = agencia;
   this.conta = conta;
   this.saldo = saldo;
}
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;}
    this.saldo -= valor;
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` +
     `Saldo: R$${this.saldo.toFixed(2)}`
    );
}
Conta.prototype.transfere_valor = function(conta_destino, valor){
        this.contaDestino = conta_destino;
        if (this.saldo < valor){
            console.log("Não existe saldo suficiente")
            return;
        }
        else{
           conta_destino.depositar(valor)
           this.saldo -= valor
           console.log("Transferencia Realizada")
        }
    }

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
}


function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca


const contacorrete = new ContaCorrente("nubank", 2222, 40, 30)
const contapoupanca = new ContaPoupanca("pagbank", 2222, 40)
contacorrete.sacar(70)
contapoupanca.sacar(10)

const conta1 = new ContaPoupanca("Brasil", 3333, 50)
const conta2 = new ContaPoupanca("Eua", 4444, 60)
conta1.transfere_valor(conta2, 20);
conta1.verSaldo()
conta2.verSaldo()