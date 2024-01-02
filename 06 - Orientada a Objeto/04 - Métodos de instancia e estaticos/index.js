class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

  // Método de instancia
  aumentaVolume(){
    this.volume += 2;
  }
  // Método de instancia
  diminuirVolume(){
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha(){
    console.log('ok, vou trocar');
  }
}

const p1 = new ControleRemoto('cce')
p1.aumentaVolume()
console.log(p1)
ControleRemoto.trocaPilha() // Só pode acessar pela classe