//Creating a basic calculator
function myCalculator(num1, num2, operator){
    if(operator == '+'){
        result = num1 + num2;
    } 
    else if (operator == '-') {
        result = num1 - num2;
    }
    else if (operator == '*') {
        result = num1 * num2;
    }
    else if(operator == '/') {
        result = num1 / num1;
    } 
    else {
        result = num1 % num2
    }
}
const newLocal = ('${num1} ${operator} ${num2} = ${result}');
console.log(newLocal)