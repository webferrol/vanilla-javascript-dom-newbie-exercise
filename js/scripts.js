const innerHTML = document.querySelector('#innerHTML')
innerHTML.addEventListener('click', function() {
    const nombre = prompt('Introduzca su nombre')
    innerHTML.innerHTML = nombre
})

const textContent = document.querySelector('#textContent')
textContent.addEventListener('click', function() {
    const nombre = prompt('Introduzca su nombre')
    textContent.textContent = nombre
})

const append = document.querySelector('#append')
append.append('mundo')

const prepend = document.querySelector('#prepend')
prepend.prepend('Hola ')

const value = document.querySelector('#value')
value.addEventListener('click', function () {
    const nombre = prompt('Introduzca su nombre')
    value.value = nombre
})

const botonClickDobleClick = document.querySelector('#click-dblclick')
botonClickDobleClick.addEventListener('click', function () {
    botonClickDobleClick.value = 'Hice click'
})

botonClickDobleClick.addEventListener('dblclick', function () {
    botonClickDobleClick.value = 'Hice doble click'
})

const textArea = document.querySelector('#origen')
const botonPegar = document.querySelector('#copiar')
const destino = document.querySelector('#destino')

botonPegar.addEventListener('click', function() {
    const texto = textArea.value
    destino.append(texto)
})