function painted(widht, drowSymbol){
    let str = '';
    for (let i = 0; i < widht ; i++) {
        for (let j = 0; j < widht; j++) {
            if(i === 0 || i === widht - 1 || j === 0 || j === widht - 1 || j === i){
                str += drowSymbol;
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }
    return str;
}

console.log(painted(10, '*'));


