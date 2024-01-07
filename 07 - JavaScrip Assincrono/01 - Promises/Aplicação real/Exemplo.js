const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)  // Metodo ultilizado como promise
   .then((resp) => resp.json()) // primeiro ele retorna os dados no formato json
   .then(function (data){  // mostra na tela o arquivo json
        console.log(data)
        
        return data.map(function (user) {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username}) ${user.email}`
            ul.appendChild(li)
        })
   })
   .catch((error) => {
    console.log('oops!' + error)
   })