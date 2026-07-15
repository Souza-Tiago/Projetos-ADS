// Meu primeiro código em ADS!
// 1. Mapeamento dos elementos do HTML
const buttonLike = document.getElementById('btn-like');
const txtCounter = document.getElementById('counter');

// 2.Busca as curtidas já salvas no navegador, ou começa em 0
let totalLikes = Number(localStorage.getItem('projeto_likes')) || 0;

// 3. atualizar a tela visualmente
function renderScreen() {
    txtCounter.textContent = `${totalLikes} ${totalLikes === 1 ? 'curtida' : 'curtidas'}`;
}

// 4. Função que processa a lógica de negócio (o clique)
function handleLike() {
    totalLikes += 1; // Incrementa o valor
    localStorage.setItem('projeto_likes', totalLikes); // Salva no banco local do navegador
    renderScreen(); // Atualiza a tela
}

// 5. Inicialização: Escuta o clique do botão e desenha o estado inicial na tela
buttonLike.addEventListener('click', handleLike);
renderScreen();