function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}
function resta(...nums) {
  return nums.reduce((a, b) => a - b);
}
function multiplicacion(...nums) {
  return nums.reduce((a, b) => a * b, 1);
}
function division(...nums) {
  return nums.reduce((a, b) => a / b);
}

// const operaciones = [suma, resta, multiplicacion, division];

// let opcion = parseInt(prompt("Calculadora\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\nElige una opción (1-4):"));
// if (opcion >= 1 && opcion <= 3) {
//   let entrada = prompt("Ingresa los números separados por comas (ej: 5,10,15):");
//   let numeros = entrada.split(",").map(Number);
//   let resultado = operaciones[opcion - 1](...numeros);
//   alert("Resultado: " + resultado);
// } 
// else if (opcion === 4) {
//   let a = parseFloat(prompt("Ingresa el primer número:"));
//   let b = parseFloat(prompt("Ingresa el segundo número:"));
//   let resultado = operaciones[3](a, b);
//   alert("Resultado: " + resultado);
// } 
// else {
//   alert("Opción inválida");
// }

module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
}
