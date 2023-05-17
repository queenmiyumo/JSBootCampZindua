//Creating a basic calculator
function myCalculator(num1, num2, operator){
    if(operator == '+'){
        let result = num1 + num2;
        console.log(result);
    } 
    else if (operator == '-') {
        result = num1 - num2;
        console.log(result);
    }
    else if (operator == '*') {
        result = num1 * num2;
        console.log(result);
    }
    else if(operator == '/') {
        result = num1 / num1;
        console.log(result);
    } 
    else {
        result = num1 % num2;
        console.log(result);
    }
}