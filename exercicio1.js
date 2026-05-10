/*
Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma
loja, dado um array com os valores das transações.

Instruções:
● Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
● Usar o laço for para somar todos os valores;
● No final, exibir o valor total acumulado de vendas no console.
 */

let vendasDiarias = [100, 120, 300, 200, 130, 600, 450, 110];
let vendasTotais = 0

for (let i = 0; i < vendasDiarias.length; i++){
  vendasTotais = vendasDiarias[i] + vendasTotais;
}

console.log(`Total das vendas: ${vendasTotais}`);