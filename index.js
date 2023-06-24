let codeSheet = {
    'q': 'a', 'w': 'b', 'e': 'c', 'r': 'd', 't': 'e',
    'y': 'f', 'u': 'g', 'i': 'h', 'o': 'i', 'p': 'j',
    'a': 'k', 's': 'l', 'd': 'm', 'f': 'n', 'g': 'o',
    'h': 'p', 'j': 'q', 'k': 'r', 'l': 's', 'z': 't',
    'x': 'u', 'c': 'v', 'v': 'w', 'b': 'x', 'n': 'y',
    'm': 'z', ' ': '|'
};

function encode(word) {
    let encodedWord = '';
    for (let i = 0; i < word.length; i++) {
        let letter = word[i].toLowerCase();
        encodedWord += codeSheet[letter] || letter;
    }
    return encodedWord;
}

function decode(word) {
    let decodedWord = '';
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        for (let key in codeSheet) {
            if (letter === codeSheet[key]) {
                decodedWord += key;
                break;
            } else if (key === ' ') {
                decodedWord += letter;
            }
        }
    }
    return decodedWord;
}
