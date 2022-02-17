// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
var input
var respostaSpan = document.getElementById('resposta')
document.getElementById('btn').addEventListener('click', getInputPrintOnScreen)
const limit = 39;

function getInputPrintOnScreen(){
    input = parseInt(document.getElementById('num').value)
    if(input <=+ limit){
        var a = fib(input)
        respostaSpan.textContent = `fib(${input}) = ${a.fib} calls = ${a.calls}`
    }
    else{
        respostaSpan.textContent = `Digite um numero menor ou igual a ${limit}`
    }
}

function fib(input) {  
    let calls = -1;
    function __(input) {
        ++calls;
        if(input==1){
            return 1;
        }
        else if(input == 0){
            return 0;
        }
        else{
            return __(input-1) + __(input-2);
        }   
    }
    var a = {fib:0,calls:0}
    a.fib = __(input);
    a.calls = calls;
    return a
}