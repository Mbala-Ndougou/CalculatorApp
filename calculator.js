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

function roundToFour(num){
    return Math.round(num * 10000) / 10000;
}

const operate = function(){


    return operator == "+" ? (add(parseFloat(firstNumber),parseFloat(secondNumber))):
               operator == "-" ? substract(parseFloat(firstNumber),parseFloat(secondNumber)):
               operator == "*" ? multiply(parseFloat(firstNumber),parseFloat(secondNumber)):
               operator == "/" ? divide(parseFloat(firstNumber),parseFloat(secondNumber)):
               operator == "**" ? power(parseFloat(firstNumber),parseFloat(secondNumber)):
               null;


// I probably don't need a condition here

    // if(firstNumber && operator && secondNumber){

    //     return operator == "+" ? add(parseFloat(firstNumber),parseFloat(secondNumber)):
    //            operator == "-" ? substract(parseFloat(firstNumber),parseFloat(secondNumber)):
    //            operator == "*" ? multiply(parseFloat(firstNumber),parseFloat(secondNumber)):
    //            operator == "/" ? divide(parseFloat(firstNumber),parseFloat(secondNumber)):
    //            operator == "**" ? power(parseFloat(firstNumber),parseFloat(secondNumber)):
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
                firstNumber = display.value;
                operator = button.value;
                display.value = "";
                
            }else if(button.name == "equals"){
                secondNumber = display.value;
                result = roundToFour(operate());
                display.value = result;
                firstNumber = result;
                secondNumber = 0;
                operator = "";
            }else if(button.value == "CE"){
                display.value = ""
            }else if(button.value == "CA"){
                display.value = "";
                firstNumber = 0;
                secondNumber = 0;
                operator = "";
                result = 0
            }
        }
        );
        
    });
    

// if(number){
//     number = 0;
//     buttons.forEach(button => {

//         button.addEventListener('click', ()=>{
//             if(button.name == "number" ){            
//                 display.value += button.value ;
//             }else if(button.value == "."){
//                 display.value += button.value;
//                 button.disabled = true;
//             }else if(button.name == "operator"){
//                 operator += button.value;
//                 if(number == false){
//                     number = display.value;
//                     console.log(number+'is firstnumber');
//                     display.value = ""
//                 }
//             }
//         }
//         );
        
//     });
// }

