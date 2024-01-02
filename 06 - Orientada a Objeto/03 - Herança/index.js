class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado')
            return;
        }this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
      super(nome);
      this.cor = cor;
      this.modelo = modelo;
      this.temWifi = false
    }
    ligar(){
        console.log('voce alterou o medo da classe primaria')
    }
    falaOi(){
        console.log("esse metodo esta só em Smartphone")
    }
}
const s1 = new Smartphone('iphone', 'preto', 'xr')
console.log(s1)
s1.ligar()
s1.falaOi()