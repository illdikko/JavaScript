let input1;
let input2;
let operator;
let decimalPressed=false;
let equalPressed=false;
let operatorPressed = false;
const html_show = document.getElementById("show");
html_show.value = 0;


const pressNumber = function(nb)
{
    if (equalPressed){
        html_show.value = 0
        equalPressed = false;
    }
    if(nb==0 && html_show.value === "0") nb="";
    if(nb!=0 && nb!='.' && html_show.value ==="0") html_show.value="";
    html_show.value += nb;
}

const pressDecimal = function ()
{
    if (!decimalPressed){
        pressNumber(".");
        decimalPressed = true;
    }
    else console.warn (`Decimal already pressed`)
}

const pressOperator = function (operateur)
{
    input1 = parseFloat(html_show.value);
    operator = operateur;
    operatorPressed = true;
    html_show.value="0";
    decimalPressed = false;
    
    if (pressOperator()) {
        
        
    }
}

const pressEqual = function () 
{
    if (!input1 && input1 != 0) throw new Error ("Pas de valeur");
    if (!operator) throw new Error ("Pas d'opérateur choisi");
    input2 = parseFloat(html_show.value);

    switch (operator) {
        case "/":
            html_show.value = input1 / input2
            break;
        case "*":
            html_show.value = input1 * input2

            break;
        case "+":
            html_show.value = input1 + input2

            break;
        case "-":
            html_show.value = input1 - input2

            break;
    }
    equalPressed = true;
    decimalPressed = false;
}