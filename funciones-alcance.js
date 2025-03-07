//Funcion sin parametro
function sinParametro(){
    console.log("Funcion sin parametro");
}
//funcion con un parametro
function conParametro(num){
    console.log(num*num);
}
//Funcion con multiples parametros
function multiplesParamet(num1,num2){
    console.log(num1*num2);
}
//Funcion con return 
function conReturn(num1,num2){
    return num1*num2;
}
//Funcion dentro de otra funcion 
function operacion(){
    function sumar(x,y){
        return x+y 
    }
    function restar(x,y){
        return x-y
    }

    console.log(sumar(3,5));
    console.log(restar(3,5));
}

operacion(5,4)

//Funcion nativa de JavaScript
let texto = "Hola mundo"
console.log(texto.toUpperCase())


let global = "Soy una variable global"
function test(){
    let variableLocal  = "Soy una variable local"
    console.log(global)
    console.log(variableLocal)
}

test()
console.log(global)


//Funcion impirimirNumeros

function imprimirNumeros(cadena1, cadena2) {
    let contador = 0;
    for (let i = 1; i <= 100; i++) {  // Deberías usar <= 100 para incluir el 100
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(cadena1 + cadena2);  // Si es múltiplo de 3 y 5, imprime ambas cadenas concatenadas
        } else if (i % 5 === 0) {
            console.log(cadena2);  // Si es múltiplo de 5, imprime solo la segunda cadena
        } else if (i % 3 === 0) {
            console.log(cadena1);  // Si es múltiplo de 3, imprime solo la primera cadena
        } else {
            console.log(i);  // Si no es múltiplo de 3 ni de 5, imprime el número
            contador++;  // Cuenta cuántas veces se imprime un número
        }
    }
    return contador;  // Devuelve el número de veces que se imprimieron números en lugar de cadenas
}
imprimirNumeros("hola", "mundo")
