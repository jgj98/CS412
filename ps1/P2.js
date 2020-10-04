const math = word => {
    const a =  word.charCodeAt(0) - 48;
    const b =  word.charCodeAt(2) - 48;
    const operator = word.charAt(1);
    switch (operator) {
        case '+':
            return () => a + b; //this is a function
            break;
        case '-':
            return () => a - b; //this is a function
            break;
        case '*':
            return () => a * b; //this is a function
            break;
        case '/':
            return () => a / b; //this is a function
            break;
        case '^':
            return () => a ** b; //this is a function
            break;
        case '%':
            return () => a % b; //this is a function
            break;
    }
}
module.exports = {math};
