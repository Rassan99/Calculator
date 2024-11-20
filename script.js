let buttonNumbers = document.querySelectorAll(".numbers");
let opButton = document.querySelectorAll(".op");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector(".clear");
let num1 =0;
let num2 =0;
let switches = 0;
let x ='';
let operation;


function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(n, a, o) {
    if (o == "add") {
        num1 = add(n, a);
        switches=1;
    } else if (o == "sub") {
        num1 = sub(n, a);
        switches=1;
    } else if (o == "multiply") {
        num1 = multiply(n, a);
        switches=1;
    } else if (o == "divide") {
        num1 = divide(n, a);
        switches=1;
    }
}

opButton.forEach(op => {
    op.addEventListener('click', () => {
        if ( switches == 0){
        operation = op.getAttribute('value');
         num1+=Number(x);  
         x='';
        }
        else if(switches == 1){
        num2=Number(x);
        x='';
        } 

    });
  });

equalButton.addEventListener('click', () => {
    num2=Number(x);
    x='';
    operate(num1,num2,operation);
    switches=0;
});

clearButton.addEventListener('click', () => {
    num1=null;
    num2=null;
    x='';
});


buttonNumbers.forEach(number => {
    number.addEventListener('click', () => {
        x += number.getAttribute('value');
    });
  });