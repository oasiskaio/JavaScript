const pessoas = [
    {id: 3, nome: 'kaio'},
    {id: 2, nome: 'pedro'},
    {id: 1, nome: 'lucas'}
];

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}
console.log(novasPessoas)

for (const [identifier, { id, nome}] of novasPessoas){
    console.log(identifier, id, nome)
}

// Esse codigo pega o id de forma crescente 
/*
const novasPessoas = {}
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = { ...pessoa};
}
console.log(novasPessoas)
*/

