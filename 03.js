// 3. Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find
const data = require("./data.json");

const cidade = data.find(function(cidade){
        return cidade.address.city === 'Monroe'
    });
console.table(cidade);
// function isMonroe(data){
//     return data.city === 'Monroe';
// }

// console.log(data.find(isMonroe));