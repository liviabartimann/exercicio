// A partir do vetor contido no arquivo data.json e utilizando os métodos de array (map, reduce, filter e find)
// 1. Crie uma variável que contenha todas as idades (age) dos usuário - map

// 3. Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find
// 4. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos

const year = require("./data.json");

const novoYear = year.map(year=> `${year.age} 
                 tem idade: ${year.age}`);
console.log(year);
