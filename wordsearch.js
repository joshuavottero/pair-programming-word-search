const transpose =  require("./matrix_transposition");

// transpose made by joshua vottero and Matthew Woods peer program 
// edits to wordSearch only by Joshua Vottero
const wordSearch = (letters, word) => { 
    if (letters.length === 0 || word.length === 0){
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    let virtacalJoin = transpose(letters);
    virtacalJoin = virtacalJoin.map(ls => ls.join(''))
   
    for (l of virtacalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch