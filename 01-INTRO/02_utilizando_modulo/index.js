const fs = require('fs') // file system; é um padrao nomear a variavel com o nome do modulo importado

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }

    console.log(data);
})