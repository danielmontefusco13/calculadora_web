
function Limpar(id1, id2, id3) {
    document.getElementById(id1).value="";
    document.getElementById(id2).value="";
    document.getElementById(id3).innerHTML = " ";
}

function Calcular(numero1, numero2, operacao, saida) {
    const num1 = document.getElementById(numero1).value;
    const num2 = document.getElementById(numero2).value;
    const operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    const expressao = num1 + operador + num2;
    const resultado = eval(expressao);
    document.getElementById(saida).innerHTML = "Resultado = " + resultado;
}