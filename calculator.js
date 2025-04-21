let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let result = 0


const add = function(num1, num2){
    result =  num1 + num2
    return result;
}
const substract = function(num1, num2){
    result =  num1 - num2
    return result;
}
const multiply = function(num1, num2){
    result =  num1 * num2
    return result;
}
const divide = function(num1, num2){
    result =  num1 / num2
    return result;
}
const power = function(num1,num2){
    result =  num1 ** num2
    return result;
}



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


const display = document.querySelector(".display input")    ;

const buttons = document.querySelectorAll('.buttons input[type="button"]');

buttons.forEach(button => {
    // if(parseInt(button.value) )
    button.addEventListener('click', ()=>{
        if(button.name == "number" ){
            display.value += button.value ;
        }else if(button.value == "."){
            display.value += button.value;
            button.disabled = true;
        }else if(button.name == "operator"){
            operator += button.value;
            if(firstNumber == false){
                firstNumber = display.value;
                console.log(firstNumber+'is firstnumber');
                display.value = ""
                
            }else if(firstNumber){
                secondNumber = display.value
                console.log(secondNumber+'is secondnumber');
            } 
        } else if(button.value = "="){
            operate(firstNumber,secondNumber);
            display.value = result;
        }
    });
});






