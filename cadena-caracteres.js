//Acceeso a caracteresd individuales

let texto = "JavaScript"
console.log(texto [0]) // J 
console.log(texto.charAt(1)) // A 


// Obtener la longitud de una cadena
let palabra = "Hola "
console.log(palabra.length)


// Subcadenas //substring,slice,subtr

console.log(texto.slice(0,4))

//Concatenacion  puedo unir dos cadenas'+' o con contact()

console.log(palabra + " " + texto)


//Repeticion 

console.log(palabra.repeat(4))


//Recorrer una cadena

for(let i = 0 ;i<texto.length ;i++){
    console.log(texto[i])
}

//Conversor en Mayusculas / Minusculas

console.log(texto.toLowerCase())
console.log(texto.toUpperCase())

let texto1 = "Hola Mundo"
console.log(texto1.replace("Mundo","JavaScript"))
console.log(texto1.replaceAll("o","0")) //Cambia todo 


//Division de una cadena en una array (split())

let texto2 = "Estoy haciendo un directo en twitch"
console.log(texto2.split(" "))

//Union de una cadena de en una array 

let palabras = ["Rodrigo","Hola","Que tal"]
console.log(palabras.join(" "))


//Insertar variables en una cadena
console.log(`${palabra},mi nombre es Rodrigo y estoy estudiando ${texto}`)


//Verificacion de cadenas()
let text3 = "Hola que tal?"
console.log(text3.includes("Hola"))
console.log(text3.startsWith("Hola"))

//Buscar una posicion en una subcadena
let texto4 = "Hola Hola Mundo"
console.log(texto4.indexOf("Hola"))
console.log(texto4.lastIndexOf("Hola"))

//Eliminar espacios en blanco
let textoConEspacios = "  Hola mundo   "
console.log(textoConEspacios.trim())

//COnverir una array en cadena de caracteres

let texto5 = "Hola"
console.log(texto5.split(""))

let numero  = 123
console.log(numero.toString())

//Convertir una cadena en numero 
let strNumero = "123"
console.log(parseInt(strNumero))
console.log(parseFloat("3.14"))



/* 
DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 * */

function esPalindromo(palabra){
    let invertida = palabra.split('').reverse().join('')
    return palabra.toLowerCase() === invertida.toLowerCase()
}
function esAnagrama(palabra1,palabra2){
    let normal1 = palabra1.toLowerCase().split("").sort().join("")
    let normal2 = palabra2.toLowerCase().split("").sort().join("")

    return normal1 === normal2
} 

function esIsograma(palabra){
    palabra = palabra.toLowerCase()
    for (letra of palabra){
        if(palabra.indexOf(letra) !== palabra.lastIndexOf(letra)){
            return false //la letra se repite
        }
    }
    return true
}

function analizarPalabras(){
    let palabra1 = prompt("Introduce la primera palabra:")
    let palabra2 = prompt("Introduce la segunda palabra:")

    alert(`\n Analisis de la primera palabra ${palabra1}`)
    alert(`Es palindromo : ${esPalindromo(palabra1)}`)
    alert(`Es anagrama : ${esIsograma(palabra1)}`)


    alert(`\n Comparacion entre ${palabra1} y ${palabra2} :`)
    alert(`Son anagramas: ${esAnagrama(palabra1,palabra2)}`)
}

analizarPalabras()
