const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let Arr = [];
    for (let i = 0; i < expr.length / 10; i++) {
        Arr.push(parseInt(expr.substring(i * 10, i * 10 + 10), 10).toString().match(/.{1,2}/g))
    }
    return Arr.map(item => {
        let Mass = item.map(item => item == '10' ? '.' : item == '11' ? '-' : '*').join('');
        return Mass.includes('*') ? ' ' : MORSE_TABLE[Mass];
    }).join('');
}

module.exports = {
    decode
}