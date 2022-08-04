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
    const baseLine = [];

    for(let i =  0; i < expr.length; i += 10) {
        const newStr = expr.substr (i, 10);
        let subsrtChange = '';
       

        for(let j = 0; j < newStr.length; j += 2) {
            const pair = newStr.substr(j, 2);

            if( pair === '10') {
                subsrtChange += '.'
            } else if (pair === '11') {
                subsrtChange += '-'
            } else if (pair === '**') {
                subsrtChange += '*'
            }  
        }

        baseLine.push(subsrtChange);
    }    
    

    const decodedLetters = baseLine.map(coded => MORSE_TABLE[coded] || ' ');
    const resultLine = decodedLetters.join('');

    return resultLine;
}   

module.exports = {
    decode
}