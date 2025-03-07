
//Operadores Aritmeticos
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) { 
    return num1 * num2; 
}

function division(num1, num2) {
    return num1 / num2;
}

function exponente(num1, num2) {
    return num1 ** num2; 
}

//Operadores de asigancion 
let x= 10;
let a = 8 
a += 3
let b = 10
b-=3

//Operadores de comparacion

console.log(5 == "5"); // true (convierte el string a número)
console.log(10 == 10); // true

console.log(5 === "5"); // false (diferente tipo de dato)
console.log(10 === 10); // true

console.log(5 != "5"); // false (los valores son iguales)
console.log(10 != 20); // true

console.log(5 !== "5"); // true (diferente tipo de dato)
console.log(10 !== 10); // false (mismo valor y tipo)

console.log(10 > 5); // true
console.log(3 > 7); // false

console.log(2 < 5); // true
console.log(10 < 4); // false

console.log(10 >= 10); // true
console.log(8 >= 12); // false

console.log(4 <= 4); // true
console.log(6 <= 2); // false


//Condicionales 

//if,else if,else

let num = 10;
if(num > 10 ){
    console.log("El número es mayor que 10");
}else if(num < 10 ){
    console.log("El número es menor que 10");
}else{
    console.log("El número es igual a 10");
}
//switch

let color = "green";

switch(color){
    case "green":
        console.log("El color es verde");
        break;
    case "blue": 
        console.log("El color es azul");
        break;
    default:
        console.log("El color no es ninguno de los anteriores");
}

//Iterativas
//for 

for (let i = 0 ;i <5; i++){
    console.log(`Iteración ${i}`);
}

let contador= 3
while(contador > 0 ){
    console.log(`Iteración ${contador}`);
    contador--;
}



//DIFICULTAD EXTRA

for (let i = 10 ; i <=55;i++){
    if(i%3 === 0 && i !== 16 && i%2 === 0){
        console.log(i);
    }
}

