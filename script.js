// Seleciona os elementos do DOM
const botaoAdicionar = document.getElementById('botaoAdicionar');
const playlist = document.getElementById('playlist');
const inputMusica = document.getElementById('inputMusica');

// Função para adicionar música
function adicionarMusica() {
    const nomeMusica = inputMusica.value;

    // Verifica se o campo está vazio
    if (nomeMusica === "") {
        alert("Por favor, digite o nome da música!");
        return;
    }

    // Cria um novo elemento li
    const li = document.createElement('li');
    li.innerHTML = `${nomeMusica} <button class="botaoRemover">Remover</button>`;

    // Adiciona o novo elemento à lista
    playlist.appendChild(li);

    // Limpa o campo de input
    inputMusica.value = '';

    // Adiciona o evento de remoção à música
    const botaoRemover = li.querySelector('.botaoRemover');
    botaoRemover.addEventListener('click', removerMusica);
}

// Função para remover música
function removerMusica(event) {
    const li = event.target.parentElement;
    playlist.removeChild(li);
}

// Adiciona o evento de clique no botão de adicionar
botaoAdicionar.addEventListener('click', adicionarMusica);

// Permite adicionar música pressionando "Enter"
inputMusica.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarMusica();
    }
});
