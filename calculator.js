let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;
let resetScreen = false;


const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const power = (a,b) => a**b;


function roundToFour(num){
    return Math.round(num * 10000) / 10000;
}


const operate = function(){

    if(operator == "/" && secondNumber == 0){
        result = 'ERROR';
        return result;
    }else{
        return operator == "+" ? roundToFour((add(parseFloat(firstNumber),parseFloat(secondNumber)))):
               operator == "-" ? roundToFour(substract(parseFloat(firstNumber),parseFloat(secondNumber))):
               operator == "*" ? roundToFour((multiply(parseFloat(firstNumber),parseFloat(secondNumber)))):
               operator == "/" ? roundToFour(divide(parseFloat(firstNumber),parseFloat(secondNumber))):
               operator == "**" ? roundToFour(power(parseFloat(firstNumber),parseFloat(secondNumber))):
               null;
    }

    

}


const display = document.querySelector(".display input")    ;

const buttons = document.querySelectorAll('.buttons input[type="button"]');


buttons.forEach(button => {

        button.addEventListener('click', ()=>{

            // console.log(button.value);  ||Pretty useful for debugging!
            
            str = display.value ;
            if(button.name == "number" ){  

                if(resetScreen == false){
                    display.value += button.value ;

                }else{

                    display.value = "" ;
                    resetScreen = false
                    display.value = button.value;

                }          
                
            }else if(button.value == "."){

                display.value += button.value;


            }else if(button.name == "operator"){

                if(firstNumber && display.value){

                    // An operation is going on!
                    secondNumber = parseFloat(display.value);
                    result = operate();
                    display.value = result;
                    firstNumber = parseFloat(result);
            
                }else{

                    // It's the first operation
                    firstNumber = parseFloat(display.value);
                    resetScreen = true;

                }

                operator = button.value;
                resetScreen = true;

            }else if(button.name == "equals"){
                
                secondNumber = parseFloat(display.value);
                result = operate();
                display.value = result;
                firstNumber = result;
                operator = "";
                resetScreen = true;
                button.disabled = true;

            }else if(button.value == "CE"){

                display.value = ""
                resetScreen = false;

            }else if(button.value == "CA"){

                display.value = "";
                firstNumber = 0;
                secondNumber = 0;
                operator = "";
                result = 0
                resetScreen = false;

            }

        });
        
    });

