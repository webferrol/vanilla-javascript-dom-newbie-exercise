const innerHTML = document.querySelector('#innerHTML')
innerHTML.addEventListener('click', function() {
    const nombre = prompt('Introduzca su nombre')
    innerHTML.innerHTML = nombre
})