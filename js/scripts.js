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

const botonCDN = document.querySelector('#cdn')
const oculto = document.querySelector('.oculto')
const botonCerrar = document.querySelector('.fa-times-circle')

botonCDN.addEventListener('click', function (e) {
    e.preventDefault()
    oculto.style.display = 'block'
    botonCerrar.addEventListener('click', function () {
        oculto.style.display = 'none'
    })
})

const botonAnhadirClases = document.querySelector('#addClass')
const botonEliminarClases = document.querySelector('#removeClass')
const ol = document.querySelector('#add-remove-class')

botonAnhadirClases.addEventListener('click', function () {
    ol.firstElementChild.classList.add("fa", "fa-blind", "fa-3x")
})

botonEliminarClases.addEventListener('click', function () {
    ol.firstElementChild.classList.remove("fa", "fa-blind", "fa-3x")
})


// Ejercicio 1
const h1 = document.querySelector('h1')
h1.addEventListener('click', function () {
    h1.textContent = 'Hola mundo'
})

// Ejercicio 2
const botonOcultar = document.querySelector('#miBoton')
botonOcultar.addEventListener('click', function () {
    botonOcultar.style.display = 'none'
})

// Ejercicio 3
const enlaceAOcultar = document.querySelector('#meMuero')
enlaceAOcultar.addEventListener('mouseover', function () {
    enlaceAOcultar.style.display = 'none'
})

enlaceAOcultar.addEventListener('click', function (event) {
    event.preventDefault()
})

// Ejercicio 4
const formulario = document.querySelector('#f-typeof')
const botonTipoDeDato = document.querySelector('#f-typeof .boton')
const cajaInput = document.querySelector('#miCaja')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()
})

botonTipoDeDato.addEventListener('click', function () {
    alert(typeof(cajaInput.value))
})

// Ejercicio 5
const inputIsNaN = document.querySelector('#isNaN')
const botonActualizar = document.querySelector('#bColor')
const parrafoColor = document.querySelector('#pColor')

botonActualizar.addEventListener('click', function () {
    if (!isNaN(inputIsNaN.value)) {
        parrafoColor.classList.add('rojo')
    } else {
        parrafoColor.classList.remove('rojo')
    }
})