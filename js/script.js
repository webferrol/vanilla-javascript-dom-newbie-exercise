
// document.querySelector('#innerHTML').innerHTML = '<strong>Xurxo</strong>'
document.querySelector('#innerHTML').innerHTML = '<strong>Xurxo</strong>'

// Propiedad textContent. Inserte su nombre
document.querySelector('#textContent').textContent = 'Xurxo'

// Añadir "mundo"
let appendEl = document.querySelector('#append')
appendEl.textContent = `${appendEl.textContent} mundo` //template literals
// appendEl.textContent = appendEl.textContent + 'mundo' // concatenación
// appendEl.textContent += 'mundo' // concatenación simplificada

// Anteponer "Hola"
const prependEl = document.querySelector('#prepend')
prependEl.textContent = `Hola ${prependEl.textContent}` // template literals (`` backticks). ${} interpolación colocar una expresión

// Propiedad value. Inserte su nombre
// const nombreEl = document.querySelector('#value')
// nombreEl.value = 'Xurxo'
document.querySelector('#value').value = 'Xurxo'


// Ejercicio de eventos
const btnClick = document.querySelector('#click-dblclick')


btnClick.addEventListener(
    'click',
    function (event) { // event es parámetro que captura el evento
        btnClick.value = 'Hice click'
    }
    )
    btnClick.addEventListener(
        'dblclick',
        function () { // event es parámetro que captura el evento
            btnClick.value = 'Hice doble click'
        }
        )
        
        // Ejercicio de copiar-pegar
        
        // Pasos
        // Capturar los elementos al cargar la página
        const btnCopyPasteEl = document.querySelector('#copiar')
        const outDestinoEl = document.querySelector('#destino')
        const txtOrigenEl = document.querySelector('#origen')        
        
        function copiarPegarTexto () { // la declaración de las funciones con camelCase            
            outDestinoEl.textContent = `${outDestinoEl.textContent}${txtOrigenEl.value}`
        }
        
        
        
        
        btnCopyPasteEl.addEventListener(
            'click',
            copiarPegarTexto // ❌ copiarPegarTexto()
            )

    // document.querySelector('ol').style.backgroundColor = 'red'
    // document.querySelector('ol').style.color = 'white'

  

document.querySelector('#cdn')
    .addEventListener(
            'click',
            function (evento) {
                evento.preventDefault() // evitar que el enlace se propague
                document.querySelector('.oculto').style.display = 'block'
            }
        )

document.querySelector('.cerrar.fa')
            .addEventListener(
                'click',
                function () {
                    document.querySelector('.oculto').style.display = 'none'
                }
            )

// classList.remove(),classList.add(),classList.toggle()
const btnAddClass = document.querySelector('#addClass')

btnAddClass.addEventListener(
    'click',
    function () {
        const li = document.querySelector('#add-remove-class > li')
        li.classList.add("fa","fa-blind","fa-3x")
    }
)

const btnRemoveClass = document.querySelector('#removeClass')

btnRemoveClass.addEventListener(
    'click',
    function () {
        const li = document.querySelector('#add-remove-class > li')
        li.classList.remove("fa","fa-blind","fa-3x")
    }
)

// Ejercicios de refuerzo

// 1. Captura con JavaScript la etiqueta h1 de esta página y al hacer click sobre él que salga el mensaje "Hola mundo"

document.querySelector('h1')
    .addEventListener(
        'click',
        function() {
            alert('Hola mundo')
        }
    )


// 2 Al pulsar el botón  deberá ocultarse susodicho botón.

document.querySelector('#miBoton')
    .addEventListener(
            'click',

            function(event) {

                event.currentTarget.style.display = "none";
                
            }

    )


// 3 Utiliza el evento mouseover para cuando pasemos el ratón sobre este enlace éste desaparezca. También debes parar el evento de cuando el usuario realiza un click sobre dicho enlace.

const botonHover = document.querySelector("#meMuero")

botonHover.addEventListener(
    'mouseout',
    function(){
        botonHover.style.display='none'
    }
)

botonHover.addEventListener(
    'click',
    function(evento){
        evento.preventDefault()
        
    }
)

// 4 Obtén el valor y muestra el tipo de variable mediante una ventana modal el contenido de este cuadro de texto...
// 1. [x] Parar el formulario
// 2. [X] Coger elemento input
//        - elemento.value es lo que me devuelve el texto
// 3. [X] Ventana modal donde me diga el tipo de dato

document.querySelector('#f-typeof')
    .addEventListener(
        'submit',
        function (event) {
            event.preventDefault()       
            
            const input = document.querySelector('#miCaja')
            alert(`${input.value} el tipo de dato es ${typeof input.value}`)

        }
    )

// Ejercicio 5.
// 1. [] Capturar botón y lanzar la función anónima el método addEventListener
document.querySelector('#bColor').addEventListener(
    'click',
    function () {
       
        const valor = document.querySelector('#isNaN').value
      
        const isNumber = !isNaN(valor) 
      
        if (isNumber) {
            document.querySelector('#pColor').classList.add('rojo')
        } else {
            document.querySelector('#pColor').classList.remove('rojo')
        }
       
    }
)

document.querySelector('#isNaN').addEventListener(
    'input',
    function (event) {
        const input = event.currentTarget
        const isNumber = !isNaN(input.value) 
      
        if (isNumber) {
            document.querySelector('#pColor').classList.add('rojo')
        } else {
            document.querySelector('#pColor').classList.remove('rojo')
        }

    }
)
            