
//№2
const removeDigit = (number) => {
    const a = Math.floor(number / 100);
    const b = number % 10;
    return (a * 10) + b;
}
console.log(removeDigit(208));
console.log(removeDigit(109));
console.log(removeDigit(940));
//№3
const isSquare = (num1, num2) => {
    if (Math.sqrt(num1) === num2 || Math.sqrt(num2) === num1){
        return true;
    } else {
        return false;   
    }
}
console.log(isSquare(2, 4));
console.log(isSquare(81, 9));
console.log(isSquare(25, 125));

//№4
 const numberLength = (number) => {
    return number.toString().length;
}
console.log(numberLength(123));
console.log(numberLength(3));
console.log(numberLength(19283));

//№5
const flipOver = (str) => {
    let a = '';
    for (let i = str.length - 1; i >= 0; i--) {
        a += str[i];
    }
    return a;
}
console.log(flipOver('hello'));
console.log(flipOver('swap'));
console.log(flipOver('John Doe'));