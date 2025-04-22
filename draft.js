buttons.forEach(button => {
    // if(parseInt(button.value) )
    button.addEventListener('click', ()=>{
        // console.log(typeof(button.value));
        let mayBeInteger= parseInt(button.value)
        
        if(Number.isInteger(mayBeInteger) ){
            display.value += button.value ;

        }else if(button.value == "."){
            display.value += button.value;
            button.disabled = true;
        }else if(button.value == "Exp"){
            if(!firstNumber){
                firstNumber = display.value;
                operator += button.value;
            }
        }else if(button.value == "="){
            operate(firstNumber)
        }



//                     C'EST ICI QUE TOUT SE GATE!!!

        }else if(button.value == "+"||button.value == "-"||button.value == "*"||button.value == "/"||button.value == "Exp"||){
           if(firstNumber == false){
            firstNumber = display.value;
            operator += button.value;
           }else{
            secondNumber = display.value;
            operator += button.value;
           }
        } else if(button.value == "="){
            if(firstNumber&&secondNumber){
                operate(firstNumber,secondNumber);
            }else if(firstNumber){
                operate(firstNumber);
            }
        }
    });
});