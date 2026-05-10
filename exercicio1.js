let vendasDiarias = [100, 120, 300, 200, 130, 600, 450, 110];
let vendasTotais = 0

for (let i = 0; i < vendasDiarias.length; i++){
  vendasTotais = vendasDiarias[i] + vendasTotais;
}

console.log(`Total das vendas: ${vendasTotais}`);