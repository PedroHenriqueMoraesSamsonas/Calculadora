var valor
var resultado
var raiz
var ele
function botao(num) {
    
    valor = document.getElementById('visor').innerHTML += num;
    console.log(valor)
    document.getElementById('visor').innerHTML = valor;

}

function reseta(){
    
    document.getElementById('visor').innerHTML ="";
}

function calculo() {
    
    resultado = eval(valor);
    document.getElementById('visor').innerHTML = resultado

}
