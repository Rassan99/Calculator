let buttonNumbers = document.querySelectorAll(".numbers");
let opButton = document.querySelectorAll(".op");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector(".clear");
let resultDiv = document.getElementById('result');

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
    if(num2===0){
    resultDiv.innerHTML = 'ur craazy';
    }
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
    return num1
}

opButton.forEach(op => {
    op.addEventListener('click', () => {
        if ( switches == 0){
        operation = op.getAttribute('value');
         num1+=Number(x);  
         x='';
         resultDiv.innerHTML = '';
        }
        else if(switches == 1){
        num2=Number(x);
        x='';
        resultDiv.innerHTML = num2;

        } 
    });
  });

equalButton.addEventListener('click', () => {
    num2=Number(x);
    x='';
    let res =operate(num1,num2,operation);
    if(num2==0 && operation=='divide'){
        resultDiv.innerHTML = 'ur craazy';
    }
    else{
        resultDiv.innerHTML = res;

    }
        switches=0;

});

clearButton.addEventListener('click', () => {
    num1=null;
    num2=null;
    x='';
    resultDiv.innerHTML = '';
});

buttonNumbers.forEach(number => {
    number.addEventListener('click', () => {
    x += number.getAttribute('value');
    resultDiv.innerHTML = x;
    });
  });
