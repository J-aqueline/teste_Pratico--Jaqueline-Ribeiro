let numerosOrdenados = [];

function ordenar() {
	// Obter a entrada de números do usuário
	const entrada = document.getElementById("numeros").value;

	// Separar os números em um array
	const numeros = entrada.split(",");

	// Converter os números de string para número
	for (let i = 0; i < numeros.length; i++) {
		numeros[i] = Number(numeros[i]);
	}

	// Ordenar os números
	numeros.sort((a, b) => a - b);

	// Salvar os números ordenados
	numerosOrdenados = numeros;

	// Exibir os números ordenados
	document.getElementById("resultado").innerHTML = "Números ordenados: " + numeros.join(", ");
}

function salvar() {
	// Converter os números ordenados em JSON
	const json = JSON.stringify(numerosOrdenados);

	// Criar um objeto Blob com o conteúdo em JSON
	const blob = new Blob([json], {type: "application/json"});

	// Criar um elemento <a> para baixar o arquivo
	const a = document.createElement("a");
	a.download = "numeros.json";
	a.href = URL.createObjectURL(blob);
	a.style.display = "none";
	document.body.appendChild(a);

	// Clicar no elemento <a> para iniciar o download
	a.click();

	// Remover o elemento <a> da página
	document.body.removeChild(a);
}
