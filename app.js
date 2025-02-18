let listaDeAmigos = [];
let lista = document.getElementById('listaAmigos');
let NomeInserido = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

// Adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = NomeInserido.value.trim();  // Remove espaços extras

    if (nomeAmigo === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)){
        alert('Amigo já adicionado.');
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarLista();
    NomeInserido.value = ''; // Limpa o campo de entrada
}
// Listar amigos na interface
function atualizarLista() {
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    listaDeAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}   

// Função para sortear um amigo secreto
function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert('Adicione ao menos um amigo para sortear');
        return;
    }

    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong></li>`

}

// Função para limpar a lista
function limparLista(){
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = ''; // Limpar o resultado do sorteio
}
