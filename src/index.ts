// EJERCICIO "AUMENTO DE SUELDO"

/*
• Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:

SALDO ACTUAL          SUELDO CON AUMENTO
$ 0 - 15000                   20%
$ 15001 - 20000               10%
$ 20001 - 25000               5%
$ más de 25000          No hay aumento

• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre
*/

// Declaración de variables:

let sueldoActual: number = Number(
  prompt("Por favor, ingrese el saldo actual del empleado")
);

let sueldoA: number = 15000;
let sueldoB: number = 20000;
let sueldoC: number = 25000;

let aumentoA: number = 0.2;
let aumentoB: number = 0.1;
let aumentoC: number = 0.05;

//Pleanteo del Algoritmo:

if (sueldoActual <= sueldoA) {
  console.log(
    "El sueldo final (con aumento incluído) es de:",
    sueldoActual + sueldoActual * aumentoA
  );
}

if (sueldoActual > sueldoA && sueldoActual <= sueldoB) {
  console.log(
    "El sueldo final (con aumento incluído) es de:",
    sueldoActual + sueldoActual * aumentoB
  );
}

if (sueldoActual > sueldoB && sueldoActual <= sueldoC) {
  console.log(
    "El sueldo final (con aumento incluído) es de:",
    sueldoActual + sueldoActual * aumentoC
  );
}

if (sueldoActual > sueldoC) {
  console.log("No hay aumento. El sueldo es de:", sueldoActual);
}
