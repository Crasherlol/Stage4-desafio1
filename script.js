numberOne = prompt('Insira o primeiro numero: ');
numberTwo = prompt('Insira o segundo numero: ');
var soma = Number(numberOne) + Number(numberTwo);
var subtracao = Number(numberOne) - Number(numberTwo);
var multiplicacao = Number(numberOne) * Number(numberTwo);
var divisao = Number(numberOne) / Number(numberTwo);
var restoDivisao =  Number(numberOne) % Number(numberTwo);

alert ('Essa é a soma dos seus dois numeros: ' +soma);
alert ('Essa é a subtracao dos seus dois numeros: ' +subtracao);
alert ('Essa é a multiplicação dos seus dois numeros: ' +multiplicacao);
alert ('Essa é a divisão dos seus dois numeros: ' +divisao);
alert ('Essa é o resto da divisão dos seus dois numeros: ' +restoDivisao);

if (soma % 2 == 0){
    alert ('A soma dos seus dois numeros é par');
} else{
    alert ('A soma dos seus dois numeros é impar');
}
if (numberOne == numberTwo){
    alert ('Os seus dois numeros digitados são iguais');
}




