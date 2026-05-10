/*
 Procurando um valor no array: Usar um laço for para procurar um número específico em
um array e verificar se ele existe.
Instruções:
● Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
● Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
● Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
"Número encontrado" ou "Número não encontrado".
*/

let numeros = [23, 45, 13, 10, 33, 15, 20];
let numeroProcurado = 2;
let numeroEncontrado = false;

for(let i = 0; i < numeros.length; i++){
   if(numeros[i] === numeroProcurado){
    numeroEncontrado = true  
    }
}

if(numeroEncontrado){
        console.log('Número encontrado')
    }else{
        console.log('Número não encontrado')
    }