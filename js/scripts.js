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