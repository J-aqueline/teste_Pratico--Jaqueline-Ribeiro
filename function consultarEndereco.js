function consultarEndereco(cep) {
    var xmlhttp = new XMLHttpRequest();
  
    var soapEnvelope =
      '<?xml version="1.0" encoding="utf-8"?>' +
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soap:Body>' +
          '<consultaCEP xmlns="http://cliente.bean.master.sigep.bsb.correios.com.br/">' +
            '<cep>' + cep + '</cep>' +
          '</consultaCEP>' +
        '</soap:Body>' +
      '</soap:Envelope>';
  
    xmlhttp.open('POST', 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente', true);
  
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', 'http://cliente.bean.master.sigep.bsb.correios.com.br/AtendeCliente/consultaCEP');
  
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var responseText = xmlhttp.responseText;
  
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(responseText, 'text/xml');
  
        var endereco = {
          logradouro: xmlDoc.getElementsByTagName('logradouro')[0].childNodes[0].nodeValue,
          bairro: xmlDoc.getElementsByTagName('bairro')[0].childNodes[0].nodeValue,
          cidade: xmlDoc.getElementsByTagName('cidade')[0].childNodes[0].nodeValue,
          uf: xmlDoc.getElementsByTagName('uf')[0].childNodes[0].nodeValue,
          cep: xmlDoc.getElementsByTagName('cep')[0].childNodes[0].nodeValue
        };
  
        console.log(endereco);
        // Exibe o endereço na tela
        document.getElementById('logradouro').textContent = endereco.logradouro;
        document.getElementById('bairro').textContent = endereco.bairro;
        document.getElementById('cidade').textContent = endereco.cidade;
        document.getElementById('uf').textContent = endereco.uf;
        document.getElementById('cep').textContent = endereco.cep;
      }
    };
  
    xmlhttp.send(soapEnvelope);
  }
  
  consultarEndereco('01311-923'); // Exemplo de CEP a ser consultado
  