// let num1 = prompt("digite o primeiro numero:");
// let num2 = prompt("digite o segundo numero:");

// num1 = Number(num1);
// num2 = Number(num2);

// const resultado = num1 + num2;
// alert(`O resultado da sua conta é: ${resultado}`);



let varA = 'A'; //quero que ela se torne B
let varB = 'B'; //quero que ela se torne C
let varC = 'C'; //quero que ela se torne A


[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);