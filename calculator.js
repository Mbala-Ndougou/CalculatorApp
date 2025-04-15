const add = function(num1, num2){
    return num1 + num2
}

const substract = function(num1, num2){
    return num1 - num2
}

const multiply = function(num1, num2){
    return num1 * num2
}

const divide = function(num1, num2){
    return num1 / num2
}

const power = function(num1,num2){
    return num1 ** num2;
}


let firstNumber = 0;
let secondNumber = 0;
let operator = "";


const operate = function(){
    firstNumber = prompt()
    operator = prompt()

    secondNumber = prompt()

    if(firstNumber && operator && secondNumber){

        return operator == "+" ? add(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "-" ? substract(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "*" ? multiply(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "/" ? divide(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "**" ? power(parseInt(firstNumber),parseInt(secondNumber)):
               null;
    
    }else {
        return 'Not a valid input'
    }
}


