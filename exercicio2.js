/* 
Calculando a média de notas: Usar um laço for para calcular a média das notas de
um/a estudante.
Instruções:
● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
● Utilizar o laço for para somar as notas;
● Calcular a média das notas e exibir o resultado no console.
*/

let notas = [8, 10, 9, 7, 9];
let notasTotais = 0;

for (let i = 0; i <notas.length; i++){
    notasTotais = notas[i] + notasTotais;
}

let mediaNotas = notasTotais / notas.length;

console.log(`Média das notas: ${mediaNotas}`);