function somar() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const resultado = num1 + num2
  document.getElementById("calculoFinal").textContent = resultado;
}

function subtracao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("calculoFinal").textContent = num1 - num2;
}

function multiplicacao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  document.getElementById("calculoFinal").textContent = num1 * num2;
}

function divisao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  if (num2 == 0) {
      document.getElementById("calculoFinal").textContent = "Error"
  }
  else {
      document.getElementById("calculoFinal").textContent = num1 / num2;
  }
}

// EXPONENCIAL 

function exponenciacao() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num2)) {
      document.getElementById("calculoFinal").textContent = "preencha o 2° número";
  }
  else {
      document.getElementById("calculoFinal").textContent = Math.pow(num1, num2);
  }
}

// RAIZ 

function raizQuadrada() {
  const num1 = parseInt(document.getElementById("num1").value);
  document.getElementById("calculoFinal").textContent = Math.sqrt(num1);
}

// FATORIAL

function fatorial() {
  const num1 = parseInt(document.getElementById("num1").value);

  let calculoFinal = 1;
  for (let i = 1; i <= num1; i++) {
      calculoFinal *= i;
  }
  document.getElementById("calculoFinal").textContent = calculoFinal;
}

// NÚMERO PAR - IMPAR 

function parImpar() {

  const num1 = parseInt(document.getElementById("num1").value);

  if (num1 % 2 === 0) {
      document.getElementById("calculoFinal").textContent = "Par";
  } else {
      document.getElementById("calculoFinal").textContent = "Ímpar";
  }
}

// NÚMERO PRIMO

function numberPrimo() {

  const num1 = parseInt(document.getElementById("num1").value);

  let divisores = 0;
  for (let i = 1; i <= num1; i++) {
      if (num1 % i === 0) {
          divisores++;
      }
  }
  if (divisores === 2) {
      document.getElementById("calculoFinal").textContent = "Primo";
  } else {
      document.getElementById("calculoFinal").textContent = "Não é primo";
  }
}


//**********************************TESTES ****************************************//

// // OPERAÇÕES BÁSICAS

// function somar(a,b) {
//   return a + b
// }

// function subtracao(a,b) {
//   return a - b
// }

// function multiplicacao(a,b) {
//   return a * b
// }

// function divisao(a,b) {

//   if (b == 0) {
//       return "Error"
//   }
//   else {
//       return a / b;
//   }
// }

// // EXPONENCIAL 

// function exponenciacao(a,b) {
//       return Math.pow(a, b);
// }

// // RAIZ 

// function raizQuadrada(a) {
//   return Math.sqrt(a);
// }

// // FATORIAL

// function fatorial(a) {
//   let calculoFinal = 1;
//   for (let i = 1; i <= a; i++) {
//       calculoFinal *= i;
//   }
//   return calculoFinal;
// }

// // NÚMERO PAR - IMPAR 

// function parImpar(a,b) {

//   if (a % 2 === 0) {
//      return "Par";
//   } else {
//       return "Ímpar";
//   }
// }

// // NÚMERO PRIMO

// function numberPrimo(a,b) {

//   let divisores = 0;
//   for (let i = 1; i <= a; i++) {
//       if (a % i === 0) {
//           divisores++;
//       }
//   }
//   if (divisores === 2) {
//       return "Primo";
//   } else {
//       return "Não é primo";
//   }
// }

// EXPORTS

// module.exports = { 
//   somar,
//   subtracao,
//   multiplicacao,
//   divisao,
//   fatorial,
//   numberPrimo,
//   parImpar,
//   exponenciacao,
//   raizQuadrada
// };
