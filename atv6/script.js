function gerarPersonagem() {

    let nome = prompt("Digite o nome do seu personagem:");
    if (!nome) {
        alert("Nome é obrigatório!");
        return;
    }

    let classe = prompt("Digite a classe do seu personagem (ex: Guerreiro, Mago, Arqueiro):");
    if (!classe) {
        alert("Classe é obrigatória!");
        return;
    }

    let habilidade = prompt("Digite a principal habilidade do seu personagem:");
    if (!habilidade) {
        alert("Habilidade é obrigatória!");
        return;
    }

    let frase = `O lendário ${classe} chamado ${nome} acaba de entrar na guilda usando sua técnica de ${habilidade}!`;

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>${frase}</p>`;
    resultadoDiv.style.display = "block"; 
}