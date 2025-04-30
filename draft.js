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
                
                if(button.name != "number"){
                    secondNumber = display.value
                    display.value = ""
                    console.log(secondNumber+'is secondnumber');
                    switch(button.name){
                        case "operator":
                            operator += button.value;
                            break;
                        case "equals":
                            operate(firstNumber,secondNumber)
                            console.log(result);
                            
                    }
                }
            } 
        } else if(button.value = "="){
            operate(firstNumber,secondNumber);
            display.value = result;
        }
    });