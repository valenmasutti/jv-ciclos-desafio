let numero = 0;
do {
  numero = prompt("ingrese un numero");
  console.log(numero);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(numero + "x" + i + "=" + resultado);
  }
} while (parseInt(numero));
alert("no es un numero");
