/* 
 Operadores Lógicos
  && -> AND -> E -> TOdoas as expressoes precisam ser verdadeira para retornar true
  || -> OR -> OU
  ! -> NOT -> NÂO
 */ 

  const expressaoAnd = true && true && true;
  const expressaoOr = true || false;
  console.log("Esta expressão é " + expressaoOr)
  
  const usuario = 'Kaio';
  const senha = '12345';
  const vailogar = usuario === 'Kaio' && senha === '12348';
  console.log(vailogar);

  const corUsuario = null;
  const corPadrao = corUsuario || "preto"
  console.log(corPadrao)