const mudarTexto = document.querySelector('h1')
mudarTexto.innerText = 'Isadora'
mudarTexto.style.color = 'red'

const button = document.querySelector('.button01')
const input = document.querySelector('.input01')

function pegarOValorDOInput(){
    console.log (input.value)
}

button.addEventListener('click', pegarOValorDOInput)