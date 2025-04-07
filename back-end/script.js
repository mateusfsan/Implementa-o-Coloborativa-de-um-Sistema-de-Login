// Função para calcular a soma
function calcularSoma() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = document.getElementById('resultado');
    var error = document.getElementById('error');

    error.innerText = '';


    if (isNaN(num1) || isNaN(num2)) {
        error.innerText = 'Erro: Por favor, insira números válidos em ambos os campos.';
        resultado.innerText = '';
        return;
    }

    resultado.innerText = 'Resultado: ' + (num1 + num2);
}

// Função para calcular a subtração
function calcularSubtracao() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = document.getElementById('resultado');
    var error = document.getElementById('error');

    error.innerText = '';

    // Verificar se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        error.innerText = 'Erro: Por favor, insira números válidos em ambos os campos.';
        resultado.innerText = '';
        return;
    }

    resultado.innerText = 'Resultado: ' + (num1 - num2);
}

// Função para calcular a multiplicação
function calcularMultiplicacao() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = document.getElementById('resultado');
    var error = document.getElementById('error');

    error.innerText = '';

    // Verificar se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        error.innerText = 'Erro: Por favor, insira números válidos em ambos os campos.';
        resultado.innerText = '';
        return;
    }

    resultado.innerText = 'Resultado: ' + (num1 * num2);
}

// Função para calcular a divisão
function calcularDivisao() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = document.getElementById('resultado');
    var error = document.getElementById('error');

    error.innerText = '';

    // Verificar se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        error.innerText = 'Erro: Por favor, insira números válidos em ambos os campos.';
        resultado.innerText = '';
        return;
    }

    // Verificar se o divisor é zero
    if (num2 === 0) {
        error.innerText = 'Erro: Não é possível dividir por zero.';
        resultado.innerText = '';
        return;
    }

    resultado.innerText = 'Resultado: ' + (num1 / num2);
}
