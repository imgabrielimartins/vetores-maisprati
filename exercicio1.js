let vendasDiarias = [100, 120, 300, 200, 150, 130, 600, 450, 110, 90];
let vendasTotais = 0

for (let i = 0; i < 10; i++){
  vendasTotais = vendasDiarias[i] + vendasTotais;
}

console.log(`Total das vendas: ${vendasTotais}`);