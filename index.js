//Asincronismo

//setTimeOut

// console.log("inicio del programa")

// setTimeout(()=>{
//     console.log("este mensaje se ejecutó en 2 segundos")
// },2000)

// console.log("fin del programa")

/////////////////////////////////////////////////////

// async function obtenerPersonaje() {
//     console.log("Iniciando la llamada a la API")
//     try{
//         const response = await fetch("https://rickandmortyapi.com/api/character/2")
//         const data = await response.json();
//         console.log("El nombre del personaje con el id 2 es: ", data.name)

//     }catch(error){
//         console.log("Error en la llamada API", error)
//     }
//     console.log("Fin la llamada a la API")
// }

// obtenerPersonaje()


/////////////////////////////////////////////////////
// console.log("Iniciando la llamada a la API")
// fetch("https://rickandmortyapi.com/api/character/1")
// .then(response => response.json())
// .then(data => console.log("El nombre del personaje con el id 1 es: ", data.name))
// .catch(error => console.error("Error en la llamada a la API", error))

// console.log("Fin la llamada a la API")
//Simulacion de una API
// function simularLlamadaApi(){
//     console.log("Inicio de llamada a la API simulada...");
//     setTimeout(()=> {
//         console.log("Datos de la API recibidos.")
//     },3000)
// }
// simularLlamadaApi()



// async function obtenerEpisodio() {
//     try{
//         const response = await fetch("https://rickandmortyapi.com/api/episode/2")
//         const data = await response.json();
//         console.log("Nombre del episodio:", data.name);
//     } catch(error){
//         console.error("Error al obtener el episodio", error);
//     }
// }
// obtenerEpisodio()


//Ejercicios para realizar.

// Ejercicio 1: Control de ejecución con setTimeout
// Consigna: Crear un programa que imprima "Inicio", espere 3 segundos y luego imprima "Fin".

// console.log("inicio");
// setTimeout(()=>{
//     console.log("fin")
// }, 3000)



// Ejercicio 2: Llamada a API
// Consigna: Crear una función que obtenga los datos del personaje(status) con ID 3 en la API de Rick and Morty usando fetch y .then.

// fetch("https://rickandmortyapi.com/api/character/3")
// .then(response => response.json())
// .then(data => console.log("El estado es: ", data.status))
// .catch(error => console.log(error))


// Ejercicio 3: Llamadas encadenadas con fetch
// Consigna: Realizar dos llamadas seguidas a la API, primero para el personaje con ID 4 y luego para el personaje con ID 5.
// fetch("https://rickandmortyapi.com/api/character/4")
//   .then(response => response.json())
//   .then(data => {
//     console.log("Personaje 4:", data.name);
//     return fetch("https://rickandmortyapi.com/api/character/5");
//   })
//   .then(response => response.json())
//   .then(data => console.log("Personaje 5:", data.name))
//   .catch(error => console.error("Error:", error));
// ;

// Ejercicio 4: Función con async y await
// Consigna: Crear una función asincrónica obtenerPersonajes que obtenga los personajes con ID 6 y 7.

// async function obtenerPersonaje() {
//    const personajes = [6, 7]
//    for (const id of personajes) {
//     const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`) 
//     const data = await response.json();
//     console.log(`El nombre del personaje con el id ${id} es: `, data.name)
//    }
// }

// obtenerPersonaje()

// Ejercicio 5: Uso de setTimeout y múltiples mensajes
// Consigna: Crea un programa que imprima "Inicio del programa", luego espere 1 segundo e imprima "Cargando datos...", y después de otros 2 segundos imprima "Datos cargados correctamente".

// console.log("Inicio del programa");

// setTimeout(()=>{
//     console.log("Cargando datos...")
//     setTimeout(()=>{
//         console.log("Datos cargados correctamente...")
//     }, 2000)
// }, 1000)





// ---------------------------------------------------------------------
//este ejercicio es avanzado, pero está en los ejemplos de la sesion 1

//instalo express y lo traigo
const express = require('express')
// declaro una variable para usar express
const app = express()
//ruta get que arroja status 200 de mensaje
app.get('/', function (req, res) {
    res.send('Status Code 200');
});

function respuesta(req, res) {
    res.send('otra respuesta');
}
//ruta get que ejecuta la funcion respuesta
app.get('/otra-respuesta', respuesta);


//me pemite verlo en el http://localhost:3000
app.listen(3000,()=>{
    console.log("Servidor escuchando en el puerto 3000")
})
// aqui se levanta el servidor, hasta que le digo ctrol C