let number = 0;
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


    return operator == "+" ? add(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "-" ? substract(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "*" ? multiply(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "/" ? divide(parseInt(firstNumber),parseInt(secondNumber)):
               operator == "**" ? power(parseInt(firstNumber),parseInt(secondNumber)):
               null;


// I probably don't need a condition here

    // if(firstNumber && operator && secondNumber){

    //     return operator == "+" ? add(parseInt(firstNumber),parseInt(secondNumber)):
    //            operator == "-" ? substract(parseInt(firstNumber),parseInt(secondNumber)):
    //            operator == "*" ? multiply(parseInt(firstNumber),parseInt(secondNumber)):
    //            operator == "/" ? divide(parseInt(firstNumber),parseInt(secondNumber)):
    //            operator == "**" ? power(parseInt(firstNumber),parseInt(secondNumber)):
    //            null;
    
    // }else {
    //     return 'Not a valid input'
    // }
    
}


const display = document.querySelector(".display input")    ;

const buttons = document.querySelectorAll('.buttons input[type="button"]');



buttons.forEach(button => {

        button.addEventListener('click', ()=>{
            if(button.name == "number" ){            
                display.value += button.value ;
            }else if(button.value == "."){
                display.value += button.value;
                button.disabled = true;
            }else if(button.name == "operator"){
                operator += button.value;
                if(number == false){
                    number = display.value;
                    console.log(number+'is firstnumber');
                    display.value = ""
                }
            }
        }
        );
        
    });

