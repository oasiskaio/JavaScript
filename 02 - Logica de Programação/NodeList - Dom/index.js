let paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = '#FFFFFF';
    p.style.color = '#000000';
    p.style.fontSize = '18pt'
    p.style.fontFamily = 'arial'
}