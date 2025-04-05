function calcularSoma() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const res = document.getElementById("resultado");
  
    if (isNaN(n1) || isNaN(n2)) {
      res.textContent = "Digite dois números válidos.";
      return;
    }
  
    res.textContent = "Resultado: " + (n1 + n2);
  }
  function voltar() {
    window.location.href = "operacoes.html";
  }