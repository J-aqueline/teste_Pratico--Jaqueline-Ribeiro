function verificarNumero() {
    var numero = parseInt(document.getElementById('numero').value);
    var divisores = [];
  
    for (var i = 1; i < numero; i++) {
      if (numero % i === 0) {
        divisores.push(i);
      }
    }
  
    var somaDivisores = divisores.reduce(function(a, b) {
      return a + b;
    }, 0);
  
    if (somaDivisores === numero) {
      document.getElementById('resultado').innerHTML = numero + ' é um número perfeito.';
      document.getElementById('resultado').classList.remove('alert-danger');
      document.getElementById('resultado').classList.add('alert-success');
    } else {
      document.getElementById('resultado').innerHTML = numero + ' não é um número perfeito.';
      document.getElementById('resultado').classList.remove('alert-success');
      document.getElementById('resultado').classList.add('alert-danger');
    }
  }
  