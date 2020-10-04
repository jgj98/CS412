const getLambda = lambda => {
    switch (lambda) {
        case 'a':
            return (word) => word.replace(/c/g,"-c").split('-');
            break;
        case 'b':
            return (word) => {
                let rep = word.replace(/a/g,"A")
                let count = word.split("a").length - 1;
                const result = {
                    originalString: word,
                    modifiedString: rep,
                    numberReplaced: count,
                    length:	  word.length,
                }
                return result;
            }
            break;
    }
}

console.log(getLambda('b')("supercaninescanscrushcats"));

console.log(getLambda('b')("supercalifragilisticexpialidocious"));
module.exports = {getLambda};


