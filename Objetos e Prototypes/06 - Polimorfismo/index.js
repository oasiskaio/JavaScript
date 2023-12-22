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