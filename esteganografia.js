const fs = require('fs')
const file = 'Syngenta.bmp'
const readStream = fs.createReadStream(file)




readStream.on('data', data => {

    if(size===0){
        /* Chegando se é BMP */
        console.log(String.fromCharCode(data[0], data[1]))
    }
    size+= data.length
})

/* A mensagem escondida da foto, tratasse de um arquivo BMP, imagem comumente usada para esconder mensagem secreta
ultilizando uma técnica antiga chamada Esteganografia, que consiste em nada mais nada menos que esconder um texto em uma imagem ou 
até mesmo em uma música, analisei a imagem, o arquivo Hexdump e realmente não consegui achar nada, mas o que eu acredito ser é uma mensagem
escondida usando a técnica de esteganografia. */