const fs = require('fs')
const file = 'Syngenta.bmp'
const readStream = fs.createReadStream(file)

let size = 0

const convertBytePInt = bytes => {
    let result = 0
    result = result | (0xFF000000 & parseInt(byte[3])<<24)
    result = result | (0x00FF0000 & parseInt(byte[2])<<16)
    result = result | (0x0000FF00 & parseInt(byte[1])<<8)
    result = result | (0x000000FF & parseInt(byte[0])<<0)
}

const strToBin = (text) => {
    text.split('').forEach(letter => {
        console.log(letter, letter.charCodeAt(0).toString(2))
    });
}

strToBin('Gui')

readStream.on('data', data => {

    if(size===0){
        /* Chegando se é BMP */
        console.log(String.fromCharCode(data[0], data[1]))
    }
    size+= data.length
})

